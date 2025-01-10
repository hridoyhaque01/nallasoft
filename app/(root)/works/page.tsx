import SectionThumbnail from "@/components/shared/SectionThumbnail";
import WorkContent from "@/components/works/WorkContent";
import { breadcrumbs } from "@/services";

function Works() {
  return (
    <>
      <SectionThumbnail
        id="workThumbnail"
        title="Works"
        breadcrumbs={breadcrumbs.works}
      />
      <WorkContent />
    </>
  );
}

export default Works;
