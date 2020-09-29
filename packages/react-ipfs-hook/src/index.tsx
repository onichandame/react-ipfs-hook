import { useState, useEffect } from 'react'
import createExternal from 'ipfs-http-client'
import { create as createEmbedded } from 'ipfs'
import { PromiseValue } from 'type-fest'

type Props = {
  external: boolean
  opts: Parameters<typeof createExternal>[0]
}

type Ipfs =
  | PromiseValue<ReturnType<typeof createExternal>>
  | PromiseValue<ReturnType<typeof createEmbedded>>

declare global {
  interface Window {
    ipfs?: Ipfs
  }
}

export const useIpfs = (
  { opts, external }: Props = { external: false, opts: `http://localhost:5001` }
): [Ipfs | null, Error | null] => {
  const [ipfs, setIpfs] = useState<Ipfs | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function stopIpfs() {
      setIpfs(null)
      setError(null)
    }
    async function startIpfs() {
      try {
        if (external && !opts) {
          setIpfs(null)
          setError(new Error(`daemon address cannot be empty`))
        }
        console.time('IPFS Started')
        if (external) setIpfs(createExternal(opts))
        else
          setIpfs(
            window.ipfs ||
              (await createEmbedded({}).then(async (ipfs) => {
                window.ipfs = ipfs
                await ipfs.start()
                return ipfs
              }))
          )
        console.timeEnd('IPFS Started')
        setError(null)
      } catch (e) {
        console.error('IPFS init error:', e)
        setIpfs(null)
        setError(e)
      }
    }
    stopIpfs().then(() => startIpfs())

    return () => {
      stopIpfs()
    }
  }, [external, opts])

  return [ipfs, error]
}
