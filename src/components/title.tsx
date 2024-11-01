import { PropsWithChildren } from "react"

export const TitleSection = ({
  titleName
}: PropsWithChildren<{titleName: string}>) => {
  return (
     <div className="py-4 pb-10 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_80%,transparent)]">
        <div className="size-[50vw] max-h-[420px] max-w-[420px] hero-ring" />
        <div className="size-[65vw] max-h-[620px] max-w-[620px] hero-ring" />
        <div className="size-[80vw] max-h-[820px] max-w-[820px] hero-ring" />
        <div className="sm:hidden md:block size-[90vw] max-h-[1020px] max-w-[1020px] hero-ring" />
      </div>
      <div className="container">
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl mt-8 tracking-wide text-center">
            {titleName}
          </h1>
        </div>
      </div>
    </div>
  )
}