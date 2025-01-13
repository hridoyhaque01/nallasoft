import { teamData } from "@/services";
import SectionHeader from "../shared/SectionHeader";
import SliderContainer from "../shared/SliderContainer";
import TeamCard from "../teams/TeamCard";

function Teams() {
  return (
    <section className="sec_p80" id="homeTeams">
      <div className="container3x">
        <SectionHeader
          tagTitle="Team"
          title="Members"
          description={`Your vision,\nPowered by Our Expertise for Flawless Solutions.`}
        />
      </div>
      <div className="mt-6 sm:mt-8 md:mt-10">
        <SliderContainer
          options={{ slidesToScroll: "auto", duration: 100, loop: true }}
          autoPlay={true}
          className="w-full overflow-hidden container2x"
        >
          <div className="flex">
            {teamData?.map((team, idx) => (
              <div className="px-1 sm:px-2 md:px-3" key={idx}>
                <TeamCard item={team} />
              </div>
            ))}
          </div>
        </SliderContainer>
      </div>
    </section>
  );
}

export default Teams;
