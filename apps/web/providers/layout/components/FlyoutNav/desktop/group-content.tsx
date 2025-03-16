import { cn } from "@workspace/ui/lib/utils"
import Link from "next/link"
import { PiArrowUpRightLight } from "react-icons/pi"

interface DropdownContentProps {
  dscrpArea: {
    enable: boolean
    text: string
    links: { link: { url: string } }[]
  }
  navItems: {
    style: string
    listLinks?: { tag: string; links: { link: { url: string } }[] }
    ftrdLink?: { tag: string; label?: string; links: { link: { url: string } }[] }
  }[]
}

export const DropdownContent: React.FC<DropdownContentProps> = (props) => {
  const { dscrpArea: descriptionArea, navItems } = props
  const { enable, text, links } = descriptionArea || {}

  return (
    <div
      className={cn(
        "grid grid-cols-8 lg:grid-cols-18 justify-between",
        "relative container h-full",
        "pointer-events-all"
      )}
    >
      {/* Column 1 / Description Area */}
      {enable && (
        <div className="grid [grid-column-end:span_4]">
          <div className="flex flex-col gap-5 max-w-[85%] prose">
            {text && (text || "No description available")}
            <div className="flex flex-col gap-4 py-4 px-0">
              {links?.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.link.url}
                  className={cn(
                    "flex items-center flex-row gap-2 w-full leading-none",
                    "transition-all duration-300 ease-out hover:text-indigo-400",
                    "not-prose"
                  )}
                >
                  <PiArrowUpRightLight className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Column 2 / ITEMS  */}
      {navItems &&
        navItems?.map((item, index) => {
          let columnSpan = 12 / (navItems?.length || 1)
          const containsFeatured = navItems?.some((navItem) => navItem.style === "featured")

          if (containsFeatured) {
            columnSpan = item.style === "featured" ? 6 : 4
          }
          return (
            <div
              key={index}
              className="grid relative"
              style={{ gridColumnEnd: `span ${columnSpan}` }}
            >
              {/* List Links */}
              {item.style === "list" && item.listLinks && (
                <div className="flex flex-col items-center ml-4">
                  <div className="flex flex-col gap-4 max-w-max">
                    <div className="text-sm text-muted-foreground uppercase tracking-widest prose select-none">
                      {item.listLinks.tag}
                    </div>
                    <div className="flex flex-col gap-4 font-light">
                      {item.listLinks.links &&
                        item.listLinks.links.map((link, linkIndex) => (
                          <Link
                            key={linkIndex}
                            href={link.link.url}
                            className={cn(
                              "flex flex-row justify-start items-center gap-2",
                              "transition-colors duration-300 ease-out focus:decoration-none",
                              "font-normal text-sm xl:text-md hover:text-violet-300 prose leading-none"
                            )}
                          >
                            <PiArrowUpRightLight className="w-4 h-4" />
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              )}
              {/* Featured Section and Links */}
              {item.style === "featured" && item.ftrdLink && (
                <div className="flex flex-col gap-4 items-end prose">
                  <div className="text-sm m-0 uppercase font-medium tracking-widest select-none text-violet-500 prose text-end">
                    {item.ftrdLink.tag}
                  </div>
                  {item.ftrdLink?.label && (
                    <div className="mr-0 text-right max-w-max select-none text-muted-foreground ">
                      {item.ftrdLink.label}
                    </div>
                  )}
                  <div className="flex flex-col  max-w-max justify-end items-end gap-2">
                    {item.ftrdLink.links &&
                      item.ftrdLink.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.link.url}
                          className={cn(
                            "flex flex-row justify-start items-center gap-2",
                            "transition-colors duration-300 ease-out focus:decoration-none",
                            "font-normal text-md text-foreground hover:text-violet-300 prose leading-none"
                          )}
                        >
                          <PiArrowUpRightLight className="w-3 h-3" />
                        </Link>
                      ))}
                  </div>
                </div>
              )}
              {/*  */}
            </div>
          )
        })}
    </div>
  )
}
