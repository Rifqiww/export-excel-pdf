import { defineStore } from "pinia";
import { ref } from "vue";

export const useDataStore = defineStore("data", () => {
  const heroes = ref([
    { name: "Arvold Rynn", weapon: "Stormbreaker Axe", role: "Fighter" },
    { name: "Selindra Vos", weapon: "Arcane Pendant", role: "Magister" },
    { name: "Terrik Flameborn", weapon: "Lava Greatsword", role: "Slayer" },
    { name: "Mila Everan", weapon: "Crystal Bloom Staff", role: "Queen" },
    { name: "Dorian Crest", weapon: "Royal Blade", role: "King" },
    { name: "Rex Malakar", weapon: "Darkened Halberd", role: "Slayer" },
    { name: "Voraith Fen", weapon: "Serpent Spear", role: "Fighter" },
    { name: "Eline Frostveil", weapon: "Moonwhisper Wand", role: "Magister" },
    { name: "Branik Ironpaw", weapon: "Heavy Warhammer", role: "Fighter" },
    { name: "Sylas Thorn", weapon: "Shadow Dagger", role: "Slayer" },
    { name: "Adrel Mira", weapon: "Emerald Staff", role: "Queen" },
    { name: "Tovan Drask", weapon: "Colossal Edge", role: "Fighter" },
    { name: "Felwin Oath", weapon: "Enchanted Tome", role: "Magister" },
    { name: "Korvath Rael", weapon: "Twin Lightning Blades", role: "Slayer" },
    { name: "Lira Dawnstar", weapon: "Sunray Staff", role: "Queen" },
    { name: "Granthok Steel", weapon: "Battle Maul", role: "Fighter" },
    { name: "Vaelori Shyne", weapon: "Seraphic Rod", role: "Magister" },
    { name: "Krevon Dusktide", weapon: "Obsidian Katana", role: "Slayer" },
    { name: "Jorian Vex", weapon: "Royal Spear", role: "King" },
    { name: "Mareth Wild", weapon: "Feralsong Blade", role: "Fighter" },
    { name: "Serentha Vynn", weapon: "Astral Grimoire", role: "Magister" },
    { name: "Zerok Talon", weapon: "Rage Claws", role: "Slayer" },
    { name: "Alindra Crestfall", weapon: "Golden Scepter", role: "Queen" },
    { name: "Thorin Redhand", weapon: "Giant Hammer", role: "Fighter" },
    { name: "Elvarion", weapon: "Violet Prism Staff", role: "Magister" },
    { name: "Drax Hallow", weapon: "Soul Eater Blade", role: "Slayer" },
    { name: "Orin Brightsteel", weapon: "Lionheart Greatsword", role: "King" },
    { name: "Cyrill Ashen", weapon: "Wildfire Axe", role: "Fighter" },
    { name: "Mellora Vey", weapon: "Sakura Wand", role: "Queen" },
    { name: "Raegos Draven", weapon: "Spectral Blade", role: "Slayer" },
    { name: "Faldren Oak", weapon: "Forestbrood Mace", role: "Fighter" },
    { name: "Kelyndra Maeve", weapon: "Illusion Staff", role: "Magister" },
    { name: "Zarvox Krell", weapon: "Death Pike", role: "Slayer" },
    { name: "Heliana Wrynn", weapon: "Royal Crystal Cane", role: "Queen" },
    { name: "Bronn Ulfar", weapon: "Wolfclaw Axe", role: "Fighter" },
    { name: "Isendra Voss", weapon: "Arcane Catalyst", role: "Magister" },
    { name: "Tyrion Vale", weapon: "Shadow Katana", role: "Slayer" },
    { name: "Kravin Morn", weapon: "Earthsplitter Hammer", role: "Fighter" },
    { name: "Sorena Lyth", weapon: "Frostbloom Staff", role: "Queen" },
    { name: "Gryndal Tor", weapon: "Ironbreaker Club", role: "Fighter" },
    { name: "Elcarion Sol",weapon: "Ancient Celestial Tome",role: "Magister", },
    { name: "Varok Shade", weapon: "Silent Edge", role: "Slayer" },
    { name: "Thorn Valkor", weapon: "Crimson Saber", role: "Fighter" },
    { name: "Ylindra Fey", weapon: "Mana Surge Staff", role: "Magister" },
    { name: "Drekkos Vane", weapon: "Skullcrusher Axe", role: "Slayer" },
    { name: "Aurelith Wynne", weapon: "Moonlight Scepter", role: "Queen" },
    { name: "Fenris Jarl", weapon: "Brutal Maul", role: "Fighter" },
    { name: "Arvantis Vale", weapon: "Royal Spirit Blade", role: "King" },
    { name: "Zerion Graves", weapon: "Nightfang Knife", role: "Slayer" },
  ]);

  const addUser = (user: { name: string; weapon: string; role: string }) => {
    heroes.value.push(user);
  };

  return {
    heroes,
    addUser,
  };
});
