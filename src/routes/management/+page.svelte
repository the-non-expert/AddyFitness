<script>
  import franchise from "$lib/images/franchise.gif";
  import managingPartner from "$lib/images/managingPartner.gif";
  import namingPartner from "$lib/images/namingPartner.gif";
  import ManagementCard from "./managementCard.svelte";

  const managementServices = [
    {
      id: 1,
      name: "Naming Partner",
      gifSrc: namingPartner,
      supportText: "WE HELP YOU GROW",
    },
    {
      id: 2,
      name: "Managing Partner",
      gifSrc: managingPartner,
      supportText: "LET'S GROW TOGETHER",
    },
    {
      id: 3,
      name: "Franchise",
      gifSrc: franchise,
      supportText: "LET'S MAKE A COMMUNITY TOGETHER",
    },
  ];
</script>

<div class="text-white mt-6 mb-6 flex flex-col gap-10 w-full">
  {#each managementServices as item (item.id)}
    <ManagementCard
      title={item.name}
      host=""
      buttonText="Contact Us"
      gifSrc={item.gifSrc}
      supportText={item.supportText}
    />
  {/each}
</div>
