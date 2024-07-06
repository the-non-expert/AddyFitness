<script>
  import adnan from "$lib/images/AdnanImage.jpeg";
  import STripathy from "$lib/images/STripathy.jpeg";
  import SwastikP from "$lib/images/SwastikP.jpeg";
  import Salini from "$lib/images/Salini.jpeg";
  import linkedinIcon from "$lib/images/linkedinIcon.svg";
  import githubIcon from "$lib/images/emailIconTeam.svg";

  const teamDetails = [
    {
      id: 1,
      name: "Sayed Adnan Ali",
      supportText: "Founder | Addy Fitness",
      designation: "Bio-Technologist, Nutritionist, CPT",
      supportText2: "",
      image: adnan,
    },
    {
      id: 2,
      name: "Shreemantha Tripathy",
      supportText: "Co-Founder | Addy Fitness",
      designation: "Asst. Prof. Mathematics, OUTR",
      supportText2: "",
      image: STripathy,
    },
    {
      id: 3,
      name: "Dr. Swastik Pattnaik",
      supportText: "Lead Physician | Addy Fitness",
      designation: "MBBS(Utkal) DGO CPCDM",
      supportText2: "(Diabetes,Endocrine & Geriatic)",
      image: SwastikP,
    },
    {
      id: 4,
      name: "Salini Parida",
      supportText: "Addy Fitness | Nutritionist",
      designation: "(Indian Institute of Public Health)",
      supportText2: "",
      image: Salini,
    },
  ];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
  {#each teamDetails as member (member.id)}
    <div class="flex flex-col items-center">
      <img
        src={member.image}
        alt="adnanImage"
        class="object-cover w-full h-96 rounded-3xl"
      />
      <div class="text-center mt-4 bg-pink-300 rounded-xl p-4 w-full">
        <p class="text-xl font-bold text-[Montserrat] text-pink-700">
          {member.name}
        </p>
        <p class="text-black">{member.supportText}</p>
        <p class="text-black">{member.designation}</p>
        <p class="text-black">{member.supportText2}</p>
        <div class="flex justify-center mt-2 gap-3">
          <a href={member.linkedin} target="_blank">
            <img src={linkedinIcon} alt="linkedin" class="w-6" />
          </a>
          <a href={member.github} target="_blank">
            <img src={githubIcon} alt="github" class="w-6" />
          </a>
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  img {
    max-height: 100%;
  }
</style>
