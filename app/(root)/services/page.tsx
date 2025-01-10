import ServiceContent from "@/components/services/ServiceContent";
import SectionThumbnail from "@/components/shared/SectionThumbnail";
import { breadcrumbs } from "@/services";

async function Services({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const query = (await searchParams)?.tab;

  return (
    <>
      <SectionThumbnail
        id="serviceThumbnail"
        title="Services"
        breadcrumbs={breadcrumbs.services}
      />
      <ServiceContent activeTab={query} />
    </>
  );
}

export default Services;
