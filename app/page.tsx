import Hero from "@/components/sections/index/hero";
import ColorOverrides from "@/components/utils/page.colors.util";
import colors 		from '@/content/index/_colors.json'


export default function Page() {
  return (
  <>
  <ColorOverrides colors={colors} />
  <Hero />
  </>
  );
}
