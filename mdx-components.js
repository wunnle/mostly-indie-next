import Image from 'next/image'

export function useMDXComponents(components) {
  return {
    img: props => {
      return (
        <Image
          {...props}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          width={100}
          height={100}
          alt={props.alt}
        />
      )
    },
    ...components
  }
}
