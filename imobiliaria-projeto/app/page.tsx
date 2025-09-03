import FeaturedProperties from "./home/components/FeaturedProperties";
import PropertyCategories from "./home/components/PropertyCategories";
import MapBanner from "./home/components/MapBanner";
import NewLaunches from "./home/components/NewLaunches";
import Testimonials from "./home/components/Testimonials";
import Brokers from "./home/components/Brokers";

export default function HomePage() {
  return (
    <>
      <FeaturedProperties />
      <PropertyCategories />
      <MapBanner />
      <NewLaunches />
      <Testimonials />
      <Brokers />
    </>
  );
}
