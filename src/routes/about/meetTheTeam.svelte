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

<div class="flex justify-evenly">
  {#each teamDetails as member (member.id)}
    <div>
      <div class="">
        <img
          src={member.image}
          alt="adnanImage"
          class="object-cover w-64 h-96 rounded-3xl"
        />
      </div>

      <div
        class="text-center mt-4 flex flex-col justify-evenly w-full bg-pink-300 rounded-xl h-36 px-4"
      >
        <p class="text-xl font-bold text-[Montserrat] text-pink-700">
          {member.name}
        </p>
        <p class="text-black">{member.supportText}</p>
        <p class="text-black">{member.designation}</p>
        <p class="text-black">{member.supportText2}</p>

        <div class="flex justify-center mt-2 gap-3">
          <a href={member.linkedin} target="_blank" class="mx-1">
            <img src={linkedinIcon} alt="github" class="w-6" />
          </a>
          <a href={member.github} target="_blank" class="mx-1">
            <img src={githubIcon} alt="github" class="w-6" />
          </a>
        </div>
      </div>
    </div>
  {/each}
</div>
