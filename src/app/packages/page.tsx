import PopularPackages from "./PopularPackages"
import UpcomingPackages from "./UpcomingPackages"

function page() {
  return (
    <div className="bg-[radial-gradient(ellipse_150%_50%_at_top_left,#75eb2d,#768071_100%)] overflow-x-clip">
        <PopularPackages />
        <UpcomingPackages />
    </div>
  )
}
export default page