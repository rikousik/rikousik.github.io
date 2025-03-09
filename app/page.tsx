import Hero from "@/components/sections/index/hero";
import FeaturedProjects from "@/components/sections/projects/featured";
import ColorOverrides from "@/components/utils/page.colors.util";
import About from "@/components/sections/index/about";
import colors 		from '@/content/index/_colors.json'


export default function Page() {
  return (
  <>
  <ColorOverrides colors={colors} />
  <Hero />
  <FeaturedProjects />
  <About />
  </>
  );
}
