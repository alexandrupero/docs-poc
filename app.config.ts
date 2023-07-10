export default defineAppConfig({
  docus: {
    title: "Shift Collective Docs",
    description: "Shift Collective documentation.",
    image:
      "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    socials: {
      github: "shiftcollective-org/Docs",
      nuxt: {
        label: "Lemmy",
        icon: "simple-icons:lemmy",
        href: "https://join-lemmy.org/",
      },
    },
    github: {
      dir: ".starters/default/content",
      branch: "main",
      repo: "Docs",
      owner: "shiftcollective-org",
      edit: true,
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      title: "Shift Collective Docs",
      logo: false,
      showLinkIcon: false,
    },
    footer: {
      credits: {
        icon: "IconDocus",
        text: "Powered by Docus",
        href: "https://docus.dev",
      },
    },
  },
});
