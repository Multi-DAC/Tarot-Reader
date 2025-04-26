// Full Tarot Deck (78 cards)
const deck = [
    // Major Arcana (22 cards) - Added rank, color, suitSymbol (null for Major)
    { name: "The Fool", isMajor: true, rank: 0, color: "#FFFF00", suitSymbol: null, uprightMeaning: "New beginnings, spontaneity, taking a leap of faith", reversedMeaning: "Recklessness, being taken advantage of, inconsideration", description: "A carefree wanderer with a dog, symbolizing innocence and adventure." },
    { name: "The Magician", isMajor: true, rank: 1, color: "#B22222", suitSymbol: null, uprightMeaning: "Manifestation, resourcefulness, power", reversedMeaning: "Manipulation, poor planning, untapped talents", description: "A figure channeling divine energy with tools of all suits." },
    { name: "The High Priestess", isMajor: true, rank: 2, color: "#00008B", suitSymbol: null, uprightMeaning: "Intuition, mystery, subconscious mind", reversedMeaning: "Secrets, disconnected from intuition, withdrawal", description: "A veiled priestess between pillars, guarding esoteric knowledge." },
    { name: "The Empress", isMajor: true, rank: 3, color: "#FFC0CB", suitSymbol: null, uprightMeaning: "Fertility, nurturing, abundance", reversedMeaning: "Dependence, smothering, emptiness", description: "A maternal figure in a lush garden, embodying creation." },
    { name: "The Emperor", isMajor: true, rank: 4, color: "#B0C4DE", suitSymbol: null, uprightMeaning: "Authority, structure, control", reversedMeaning: "Tyranny, rigidity, coldness", description: "A stern ruler on a throne, symbolizing order and discipline." },
    { name: "The Hierophant", isMajor: true, rank: 5, color: "#DAA520", suitSymbol: null, uprightMeaning: "Tradition, conformity, morality", reversedMeaning: "Rebellion, subversiveness, new approaches", description: "A religious leader blessing disciples, representing tradition." },
    { name: "The Lovers", isMajor: true, rank: 6, color: "#FF69B4", suitSymbol: null, uprightMeaning: "Love, harmony, relationships", reversedMeaning: "Disharmony, imbalance, misalignment of values", description: "A couple under an angel, signifying union and choice." },
    { name: "The Chariot", isMajor: true, rank: 7, color: "#A9A9A9", suitSymbol: null, uprightMeaning: "Willpower, determination, victory", reversedMeaning: "Lack of direction, lack of control, aggression", description: "A warrior in a chariot, driven by opposing forces." },
    { name: "Strength", isMajor: true, rank: 8, color: "#FFD700", suitSymbol: null, uprightMeaning: "Courage, inner strength, self-confidence", reversedMeaning: "Weakness, self-doubt, inadequacy", description: "A woman taming a lion, embodying gentle power." },
    { name: "The Hermit", isMajor: true, rank: 9, color: "#4B0082", suitSymbol: null, uprightMeaning: "Introspection, solitude, guidance", reversedMeaning: "Isolation, loneliness, withdrawal", description: "A cloaked figure with a lantern, seeking inner truth." },
    { name: "Wheel of Fortune", isMajor: true, rank: 10, color: "#00FFFF", suitSymbol: null, uprightMeaning: "Cycles, change, destiny", reversedMeaning: "Bad luck, lack of control, clinging to control", description: "A wheel with mystical symbols, turning fate." },
    { name: "Justice", isMajor: true, rank: 11, color: "#FFFFFF", suitSymbol: null, uprightMeaning: "Fairness, truth, law", reversedMeaning: "Injustice, dishonesty, unaccountability", description: "A seated figure with scales and sword, judging impartially." },
    { name: "The Hanged Man", isMajor: true, rank: 12, color: "#87CEEB", suitSymbol: null, uprightMeaning: "Surrender, letting go, new perspectives", reversedMeaning: "Stalling, indecision, avoidance", description: "A man suspended upside-down, embracing sacrifice." },
    { name: "Death", isMajor: true, rank: 13, color: "#000000", suitSymbol: null, uprightMeaning: "Transformation, endings, change", reversedMeaning: "Fear of change, stagnation, decay", description: "A skeletal rider, heralding inevitable transformation." },
    { name: "Temperance", isMajor: true, rank: 14, color: "#90EE90", suitSymbol: null, uprightMeaning: "Balance, moderation, patience", reversedMeaning: "Imbalance, excess, lack of harmony", description: "An angel mixing waters, symbolizing harmony." },
    { name: "The Devil", isMajor: true, rank: 15, color: "#DC143C", suitSymbol: null, uprightMeaning: "Materialism, bondage, addiction", reversedMeaning: "Freedom, release, reclaiming power", description: "A horned figure with chained figures, representing temptation." },
    { name: "The Tower", isMajor: true, rank: 16, color: "#800000", suitSymbol: null, uprightMeaning: "Sudden change, upheaval, chaos", reversedMeaning: "Fear of change, avoiding disaster, prolonging suffering", description: "A tower struck by lightning, symbolizing destruction." },
    { name: "The Star", isMajor: true, rank: 17, color: "#ADD8E6", suitSymbol: null, uprightMeaning: "Hope, inspiration, serenity", reversedMeaning: "Lack of faith, despair, disconnection", description: "A woman pouring water under stars, offering hope." },
    { name: "The Moon", isMajor: true, rank: 18, color: "#4682B4", suitSymbol: null, uprightMeaning: "Illusion, intuition, unconscious", reversedMeaning: "Confusion, fear, misinterpretation", description: "A moonlit path with howling dogs, evoking mystery." },
    { name: "The Sun", isMajor: true, rank: 19, color: "#FFA500", suitSymbol: null, uprightMeaning: "Joy, success, celebration", reversedMeaning: "Temporary depression, lack of success, negativity", description: "A child on a horse under a bright sun, radiating joy." },
    { name: "Judgement", isMajor: true, rank: 20, color: "#DDA0DD", suitSymbol: null, uprightMeaning: "Reflection, reckoning, awakening", reversedMeaning: "Self-doubt, lack of self-awareness, refusal to change", description: "Angels sounding trumpets, calling souls to rise." },
    { name: "The World", isMajor: true, rank: 21, color: "#32CD32", suitSymbol: null, uprightMeaning: "Completion, accomplishment, travel", reversedMeaning: "Incompletion, lack of closure, failure to achieve", description: "A dancer encircled by a wreath, signifying fulfillment." },

    // Minor Arcana: Cups (14 cards) - Added rank, color, suitSymbol (Heart)
    { name: "Ace of Cups", suit: "Cups", isMajor: false, rank: 1, color: "#4169E1", suitSymbol: "♥", uprightMeaning: "Love, new relationships, compassion", reversedMeaning: "Self-love, repressed emotions, blocked creativity", description: "A chalice overflowing with water, symbolizing emotional abundance." },
    { name: "Two of Cups", suit: "Cups", isMajor: false, rank: 2, color: "#4169E1", suitSymbol: "♥", uprightMeaning: "Partnership, unity, connection", reversedMeaning: "Disharmony, imbalance, broken communication", description: "Two figures exchanging cups, representing mutual love." },
    { name: "Three of Cups", suit: "Cups", isMajor: false, rank: 3, color: "#4169E1", suitSymbol: "♥", uprightMeaning: "Celebration, friendship, community", reversedMeaning: "Overindulgence, gossip, isolation", description: "Three women dancing, celebrating togetherness." },
    { name: "Four of Cups", suit: "Cups", isMajor: false, rank: 4, color: "#4169E1", suitSymbol: "♥", uprightMeaning: "Apathy, contemplation, disconnection", reversedMeaning: "Sudden awareness, acceptance, moving on", description: "A figure ignoring offered cups, lost in thought." },
    { name: "Five of Cups", suit: "Cups", isMajor: false, rank: 5, color: "#4169E1", suitSymbol: "♥", uprightMeaning: "Loss, grief, disappointment", reversedMeaning: "Acceptance, moving on, forgiveness", description: "A cloaked figure mourning spilled cups, missing others." },
    { name: "Six of Cups", suit: "Cups", isMajor: false, rank: 6, color: "#4169E1", suitSymbol: "♥", uprightMeaning: "Nostalgia, childhood memories, innocence", reversedMeaning: "Stuck in the past, naivety, unrealistic expectations", description: "Children exchanging cups, evoking memories." },
    { name: "Seven of Cups", suit: "Cups", isMajor: false, rank: 7, color: "#4169E1", suitSymbol: "♥", uprightMeaning: "Choices, fantasy, illusion", reversedMeaning: "Reality check, clarity, decision-making", description: "A figure facing mystical cups, each offering dreams." },
    { name: "Eight of Cups", suit: "Cups", isMajor: false, rank: 8, color: "#4169E1", suitSymbol: "♥", uprightMeaning: "Abandonment, withdrawal, searching for deeper meaning", reversedMeaning: "Avoidance, fear of change, stagnation", description: "A figure leaving cups behind, seeking purpose." },
    { name: "Nine of Cups", suit: "Cups", isMajor: false, rank: 9, color: "#4169E1", suitSymbol: "♥", uprightMeaning: "Contentment, satisfaction, gratitude", reversedMeaning: "Dissatisfaction, greed, smugness", description: "A smug figure with cups, known as the 'wish card'." },
    { name: "Ten of Cups", suit: "Cups", isMajor: false, rank: 10, color: "#4169E1", suitSymbol: "♥", uprightMeaning: "Harmony, happiness, family", reversedMeaning: "Broken relationships, disconnection, lack of harmony", description: "A family under a rainbow, symbolizing bliss." },
    { name: "Page of Cups", suit: "Cups", isMajor: false, rank: 'Page', color: "#4169E1", suitSymbol: "♥", uprightMeaning: "Creativity, intuition, new opportunities", reversedMeaning: "Emotional immaturity, creative blocks, ignoring intuition", description: "A youthful figure with a cup, bearing messages." },
    { name: "Knight of Cups", suit: "Cups", isMajor: false, rank: 'Knight', color: "#4169E1", suitSymbol: "♥", uprightMeaning: "Romance, charm, imagination", reversedMeaning: "Moodiness, jealousy, unrealistic expectations", description: "A knight offering a cup, driven by emotion." },
    { name: "Queen of Cups", suit: "Cups", isMajor: false, rank: 'Queen', color: "#4169E1", suitSymbol: "♥", uprightMeaning: "Compassion, calm, emotional security", reversedMeaning: "Emotional manipulation, moodiness, insecurity", description: "A serene queen with a cup, embodying empathy." },
    { name: "King of Cups", suit: "Cups", isMajor: false, rank: 'King', color: "#4169E1", suitSymbol: "♥", uprightMeaning: "Emotional balance, diplomacy, generosity", reversedMeaning: "Emotional manipulation, volatility, dishonesty", description: "A king mastering emotions, offering wisdom." },

    // Minor Arcana: Pentacles (14 cards) - Added rank, color, suitSymbol (Diamond)
    { name: "Ace of Pentacles", suit: "Pentacles", isMajor: false, rank: 1, color: "#228B22", suitSymbol: "♦", uprightMeaning: "New financial opportunities, prosperity, manifestation", reversedMeaning: "Lost opportunities, lack of planning, financial delays", description: "A hand offering a coin, symbolizing wealth." },
    { name: "Two of Pentacles", suit: "Pentacles", isMajor: false, rank: 2, color: "#228B22", suitSymbol: "♦", uprightMeaning: "Balance, adaptability, time management", reversedMeaning: "Disorganization, financial disarray, overcommitment", description: "A juggler balancing coins, managing resources." },
    { name: "Three of Pentacles", suit: "Pentacles", isMajor: false, rank: 3, color: "#228B22", suitSymbol: "♦", uprightMeaning: "Teamwork, collaboration, building", reversedMeaning: "Lack of teamwork, disorganization, group conflict", description: "Artisans working together, valuing skill." },
    { name: "Four of Pentacles", suit: "Pentacles", isMajor: false, rank: 4, color: "#228B22", suitSymbol: "♦", uprightMeaning: "Security, control, conservatism", reversedMeaning: "Greed, materialism, hoarding", description: "A figure clutching coins, guarding wealth." },
    { name: "Five of Pentacles", suit: "Pentacles", isMajor: false, rank: 5, color: "#228B22", suitSymbol: "♦", uprightMeaning: "Financial loss, poverty, isolation", reversedMeaning: "Recovery, charity, improvement", description: "Beggars outside a church, feeling abandoned." },
    { name: "Six of Pentacles", suit: "Pentacles", isMajor: false, rank: 6, color: "#228B22", suitSymbol: "♦", uprightMeaning: "Generosity, charity, sharing", reversedMeaning: "Debt, selfishness, one-sided charity", description: "A figure giving coins, balancing giving and receiving." },
    { name: "Seven of Pentacles", suit: "Pentacles", isMajor: false, rank: 7, color: "#228B22", suitSymbol: "♦", uprightMeaning: "Patience, investment, sustainable results", reversedMeaning: "Lack of long-term vision, limited success, impatience", description: "A farmer assessing crops, reflecting on effort." },
    { name: "Eight of Pentacles", suit: "Pentacles", isMajor: false, rank: 8, color: "#228B22", suitSymbol: "♦", uprightMeaning: "Apprenticeship, mastery, skill development", reversedMeaning: "Perfectionism, lack of ambition, mediocrity", description: "A craftsman carving pentacles, honing skills." },
    { name: "Nine of Pentacles", suit: "Pentacles", isMajor: false, rank: 9, color: "#228B22", suitSymbol: "♦", uprightMeaning: "Abundance, luxury, self-sufficiency", reversedMeaning: "Financial setbacks, over-investment, living beyond means", description: "A lady in a garden, enjoying prosperity." },
    { name: "Ten of Pentacles", suit: "Pentacles", isMajor: false, rank: 10, color: "#228B22", suitSymbol: "♦", uprightMeaning: "Wealth, inheritance, family", reversedMeaning: "Financial failure, loneliness, loss", description: "A family with wealth, symbolizing legacy." },
    { name: "Page of Pentacles", suit: "Pentacles", isMajor: false, rank: 'Page', color: "#228B22", suitSymbol: "♦", uprightMeaning: "Manifestation, financial opportunity, skill development", reversedMeaning: "Lack of progress, procrastination, learning from failure", description: "A youth studying a coin, eager to learn." },
    { name: "Knight of Pentacles", suit: "Pentacles", isMajor: false, rank: 'Knight', color: "#228B22", suitSymbol: "♦", uprightMeaning: "Efficiency, routine, conservatism", reversedMeaning: "Laziness, boredom, feeling stuck", description: "A knight with a coin, methodical and steady." },
    { name: "Queen of Pentacles", suit: "Pentacles", isMajor: false, rank: 'Queen', color: "#228B22", suitSymbol: "♦", uprightMeaning: "Nurturing, practical, financial security", reversedMeaning: "Imbalance in work/family, financial dependence, smothering", description: "A queen with a coin, grounded and caring." },
    { name: "King of Pentacles", suit: "Pentacles", isMajor: false, rank: 'King', color: "#228B22", suitSymbol: "♦", uprightMeaning: "Wealth, business, leadership", reversedMeaning: "Financially inept, obsession with wealth, stubbornness", description: "A king with a coin, master of prosperity." },

    // Minor Arcana: Swords (14 cards) - Added rank, color, suitSymbol (Spade)
    { name: "Ace of Swords", suit: "Swords", isMajor: false, rank: 1, color: "#808080", suitSymbol: "♠", uprightMeaning: "Clarity, breakthrough, new ideas", reversedMeaning: "Confusion, miscommunication, hostility", description: "A sword piercing a crown, symbolizing mental clarity." },
    { name: "Two of Swords", suit: "Swords", isMajor: false, rank: 2, color: "#808080", suitSymbol: "♠", uprightMeaning: "Indecision, stalemate, difficult choices", reversedMeaning: "Lesser of two evils, no right choice, confusion", description: "A blindfolded figure with crossed swords, undecided." },
    { name: "Three of Swords", suit: "Swords", isMajor: false, rank: 3, color: "#808080", suitSymbol: "♠", uprightMeaning: "Heartbreak, sorrow, grief", reversedMeaning: "Recovery, forgiveness, moving on", description: "A heart pierced by swords, symbolizing pain." },
    { name: "Four of Swords", suit: "Swords", isMajor: false, rank: 4, color: "#808080", suitSymbol: "♠", uprightMeaning: "Rest, recuperation, contemplation", reversedMeaning: "Restlessness, burnout, stress", description: "A knight in repose, seeking peace." },
    { name: "Five of Swords", suit: "Swords", isMajor: false, rank: 5, color: "#808080", suitSymbol: "♠", uprightMeaning: "Conflict, tension, defeat", reversedMeaning: "Reconciliation, making amends, past resentment", description: "A victor with swords, others defeated." },
    { name: "Six of Swords", suit: "Swords", isMajor: false, rank: 6, color: "#808080", suitSymbol: "♠", uprightMeaning: "Transition, moving on, travel", reversedMeaning: "Emotional baggage, unresolved issues, resistance to change", description: "A boat carrying figures, leaving troubled waters." },
    { name: "Seven of Swords", suit: "Swords", isMajor: false, rank: 7, color: "#808080", suitSymbol: "♠", uprightMeaning: "Deception, trickery, strategy", reversedMeaning: "Coming clean, rethinking approach, being caught", description: "A figure stealing swords, acting covertly." },
    { name: "Eight of Swords", suit: "Swords", isMajor: false, rank: 8, color: "#808080", suitSymbol: "♠", uprightMeaning: "Imprisonment, restriction, powerlessness", reversedMeaning: "Self-liberation, new perspective, freedom", description: "A bound figure surrounded by swords, feeling trapped." },
    { name: "Nine of Swords", suit: "Swords", isMajor: false, rank: 9, color: "#808080", suitSymbol: "♠", uprightMeaning: "Anxiety, worry, nightmares", reversedMeaning: "Hope, reaching out for help, improving circumstances", description: "A figure awake, tormented by fears." },
    { name: "Ten of Swords", suit: "Swords", isMajor: false, rank: 10, color: "#808080", suitSymbol: "♠", uprightMeaning: "Betrayal, loss, ending", reversedMeaning: "Recovery, regeneration, fear of ruin", description: "A figure pierced by swords, symbolizing finality." },
    { name: "Page of Swords", suit: "Swords", isMajor: false, rank: 'Page', color: "#808080", suitSymbol: "♠", uprightMeaning: "Curiosity, restlessness, mental energy", reversedMeaning: "Hasty decisions, all talk no action, manipulation", description: "A youth with a sword, eager for knowledge." },
    { name: "Knight of Swords", suit: "Swords", isMajor: false, rank: 'Knight', color: "#808080", suitSymbol: "♠", uprightMeaning: "Action, ambition, determination", reversedMeaning: "Impulsiveness, recklessness, burnout", description: "A knight charging with a sword, driven by intellect." },
    { name: "Queen of Swords", suit: "Swords", isMajor: false, rank: 'Queen', color: "#808080", suitSymbol: "♠", uprightMeaning: "Independence, clear boundaries, direct communication", reversedMeaning: "Cold-hearted, cruel, bitterness", description: "A queen with a sword, sharp and discerning." },
    { name: "King of Swords", suit: "Swords", isMajor: false, rank: 'King', color: "#808080", suitSymbol: "♠", uprightMeaning: "Intellect, authority, truth", reversedMeaning: "Manipulative, tyrannical, abusive", description: "A king with a sword, embodying logic." },

    // Minor Arcana: Wands (14 cards) - Added rank, color, suitSymbol (Club)
    { name: "Ace of Wands", suit: "Wands", isMajor: false, rank: 1, color: "#FF4500", suitSymbol: "♣", uprightMeaning: "Inspiration, new opportunities, growth", reversedMeaning: "Delays, lack of direction, distractions", description: "A hand grasping a wand, sparking creativity." },
    { name: "Two of Wands", suit: "Wands", isMajor: false, rank: 2, color: "#FF4500", suitSymbol: "♣", uprightMeaning: "Planning, progress, decisions", reversedMeaning: "Fear of change, lack of planning, restriction", description: "A figure with a globe, contemplating expansion." },
    { name: "Three of Wands", suit: "Wands", isMajor: false, rank: 3, color: "#FF4500", suitSymbol: "♣", uprightMeaning: "Expansion, foresight, overseas opportunities", reversedMeaning: "Playing small, lack of foresight, unexpected delays", description: "A figure overlooking ships, awaiting results." },
    { name: "Four of Wands", suit: "Wands", isMajor: false, rank: 4, color: "#FF4500", suitSymbol: "♣", uprightMeaning: "Celebration, harmony, homecoming", reversedMeaning: "Lack of support, transience, home conflicts", description: "A joyful gathering under garlands, celebrating." },
    { name: "Five of Wands", suit: "Wands", isMajor: false, rank: 5, color: "#FF4500", suitSymbol: "♣", uprightMeaning: "Conflict, competition, disagreement", reversedMeaning: "Avoiding conflict, focusing on cooperation, resolution", description: "Figures clashing with wands, in strife." },
    { name: "Six of Wands", suit: "Wands", isMajor: false, rank: 6, color: "#FF4500", suitSymbol: "♣", uprightMeaning: "Victory, recognition, progress", reversedMeaning: "Egotism, disrepute, lack of recognition", description: "A rider crowned with laurels, celebrated." },
    { name: "Seven of Wands", suit: "Wands", isMajor: false, rank: 7, color: "#FF4500", suitSymbol: "♣", uprightMeaning: "Perseverance, defense, maintaining control", reversedMeaning: "Giving up, overwhelmed, timidity", description: "A figure defending with a wand, standing firm." },
    { name: "Eight of Wands", suit: "Wands", isMajor: false, rank: 8, color: "#FF4500", suitSymbol: "♣", uprightMeaning: "Speed, action, air travel", reversedMeaning: "Delays, frustration, holding off", description: "Wands flying swiftly, indicating momentum." },
    { name: "Nine of Wands", suit: "Wands", isMajor: false, rank: 9, color: "#FF4500", suitSymbol: "♣", uprightMeaning: "Resilience, persistence, test of faith", reversedMeaning: "Defensiveness, paranoia, exhaustion", description: "A weary figure with wands, guarding." },
    { name: "Ten of Wands", suit: "Wands", isMajor: false, rank: 10, color: "#FF4500", suitSymbol: "♣", uprightMeaning: "Burden, responsibility, hard work", reversedMeaning: "Doing it all, delegation, release", description: "A figure carrying heavy wands, overburdened." },
    { name: "Page of Wands", suit: "Wands", isMajor: false, rank: 'Page', color: "#FF4500", suitSymbol: "♣", uprightMeaning: "Exploration, excitement, freedom", reversedMeaning: "Lack of direction, procrastination, creating conflict", description: "A youth with a wand, eager for adventure." },
    { name: "Knight of Wands", suit: "Wands", isMajor: false, rank: 'Knight', color: "#FF4500", suitSymbol: "♣", uprightMeaning: "Energy, passion, adventure", reversedMeaning: "Haste, scattered energy, delays", description: "A knight charging with a wand, full of zeal." },
    { name: "Queen of Wands", suit: "Wands", isMajor: false, rank: 'Queen', color: "#FF4500", suitSymbol: "♣", uprightMeaning: "Courage, confidence, independence", reversedMeaning: "Selfishness, jealousy, demanding", description: "A queen with a wand, vibrant and bold." },
    { name: "King of Wands", suit: "Wands", isMajor: false, rank: 'King', color: "#FF4500", suitSymbol: "♣", uprightMeaning: "Leadership, vision, entrepreneurship", reversedMeaning: "Impulsiveness, overbearing, unachievable expectations", description: "A king with a wand, a natural leader." }
];

// Spread Definitions (including niche spreads) - No changes needed here for new features
const spreads = {
    oneCard: { name: "One-Card Spread", positions: [{ name: "Insight", description: "A single point of guidance or focus" }], },
    threeCard: { name: "Three-Card Spread", positions: [{ name: "Past", description: "Influences from the past" }, { name: "Present", description: "The current situation" }, { name: "Future", description: "Potential outcome" }], },
    celticCross: { name: "Celtic Cross Spread", positions: [{ name: "Present", description: "Current situation" }, { name: "Challenge", description: "Immediate obstacle" }, { name: "Past", description: "Past influences" }, { name: "Future", description: "Near future" }, { name: "Above", description: "Goal or best outcome" }, { name: "Below", description: "Subconscious influences" }, { name: "Advice", description: "Recommended action" }, { name: "External Influences", description: "Outside factors" }, { name: "Hopes and Fears", description: "Inner emotions" }, { name: "Outcome", description: "Likely result" }], },
    horseshoe: { name: "Horseshoe Spread", positions: [{ name: "Past", description: "Influences from the past" }, { name: "Present", description: "The current situation" }, { name: "Hidden Influences", description: "Unseen factors at play" }, { name: "Obstacles", description: "Challenges to overcome" }, { name: "External Influences", description: "Outside forces" }, { name: "Advice", description: "Recommended action" }, { name: "Outcome", description: "Likely result" }], },
    astrological: { name: "Astrological Spread", positions: [{ name: "1st House", description: "Self, identity, appearance" }, { name: "2nd House", description: "Finances, possessions, values" }, { name: "3rd House", description: "Communication, siblings, short trips" }, { name: "4th House", description: "Home, family, roots" }, { name: "5th House", description: "Creativity, romance, children" }, { name: "6th House", description: "Health, work, service" }, { name: "7th House", description: "Partnerships, marriage, contracts" }, { name: "8th House", description: "Transformation, shared resources, intimacy" }, { name: "9th House", description: "Philosophy, travel, higher learning" }, { name: "10th House", description: "Career, reputation, public life" }, { name: "11th House", description: "Friendships, groups, aspirations" }, { name: "12th House", description: "Subconscious, secrets, spirituality" }], },
    treeOfLife: { name: "Tree of Life Spread", positions: [{ name: "Kether", description: "Crown - Spiritual purpose" }, { name: "Chokmah", description: "Wisdom - Creative energy" }, { name: "Binah", description: "Understanding - Intuition" }, { name: "Chesed", description: "Mercy - Abundance" }, { name: "Geburah", description: "Severity - Discipline" }, { name: "Tiphareth", description: "Beauty - Balance" }, { name: "Netzach", description: "Victory - Emotions" }, { name: "Hod", description: "Splendor - Intellect" }, { name: "Yesod", description: "Foundation - Subconscious" }, { name: "Malkuth", description: "Kingdom - Physical reality" }], },
    chakra: { name: "Chakra Spread", positions: [{ name: "Root Chakra", description: "Stability, security" }, { name: "Sacral Chakra", description: "Creativity, passion" }, { name: "Solar Plexus Chakra", description: "Personal power" }, { name: "Heart Chakra", description: "Love, compassion" }, { name: "Throat Chakra", description: "Communication" }, { name: "Third Eye Chakra", description: "Intuition" }, { name: "Crown Chakra", description: "Spiritual connection" }], },
};

const colorMap = {
    "#FFFF00": "Yellow",
    "#B22222": "Fire Brick", // Or Red
    "#00008B": "Dark Blue",
    "#FFC0CB": "Pink",
    "#B0C4DE": "Light Steel Blue", // Or Light Blue/Gray
    "#DAA520": "Goldenrod", // Or Gold
    "#FF69B4": "Hot Pink", // Or Pink/Magenta
    "#A9A9A9": "Dark Gray",
    "#FFD700": "Gold",
    "#4B0082": "Indigo", // Or Dark Purple
    "#00FFFF": "Cyan", // Or Aqua
    "#FFFFFF": "White",
    "#87CEEB": "Sky Blue", // Or Light Blue
    "#000000": "Black",
    "#90EE90": "Light Green",
    "#DC143C": "Crimson", // Or Red/Dark Red
    "#800000": "Maroon", // Or Dark Red/Brown
    "#ADD8E6": "Light Blue",
    "#4682B4": "Steel Blue", // Or Blue/Gray-Blue
    "#FFA500": "Orange",
    "#DDA0DD": "Plum", // Or Light Purple
    "#32CD32": "Lime Green", // Or Green

    // Suit Colors
    "#4169E1": "Royal Blue" , // Cups
    "#228B22": "Forest Green", // Pentacles
    "#808080": "Gray", // Swords
    "#FF4500": "Orange Red" // Wands
};

// Predefined Card Relationship Meanings - Added 'context' property
// 'context: []' means general relationship, applies if both cards are present anywhere
// 'context: ["Pos1", "Pos2"]' means specific contextual relationship, applies if Card1 is in Pos1 AND Card2 is in Pos2 OR Card1 in Pos2 AND Card2 in Pos1
// The interpretation logic will be updated to handle this flexibility and generate dynamic text.
const cardRelationships = [
    // General Relationships (Context [])
    { cards: ["The Tower", "The Star"], context: [], meaning: "A period of upheaval or crisis is followed by hope and healing, suggesting recovery after disruption." },
    { cards: ["The Lovers", "Three of Swords"], context: [], meaning: "A relationship or choice may be facing heartbreak or betrayal, urging honest communication." },
    { cards: ["The Emperor", "The Empress"], context: [], meaning: "Structure and authority complement nurturing and abundance, indicating a balanced partnership or leadership." },
    { cards: ["Death", "The Sun"], context: [], meaning: "Transformation or endings lead to joy and vitality, signaling a positive rebirth." },
    { cards: ["The Devil", "The Hermit"], context: [], meaning: "Materialism or entrapment is countered by introspection and solitude, suggesting a need to break free through self-reflection." },
    { cards: ["Ace of Cups", "Ten of Pentacles"], context: [], meaning: "New emotional beginnings align with long-term stability and family, indicating a fulfilling connection." },
    { cards: ["The Moon", "The High Priestess"], context: [], meaning: "Illusion and confusion are clarified by deep intuition, urging trust in your inner wisdom." },
    { cards: ["The Fool", "The Magician"], context: [], meaning: "Potential meets manifestation; stepping into your power to begin a new journey." },
    { cards: ["Strength", "Justice"], context: [], meaning: "Inner fortitude and compassion combined with fairness, truth, and accountability." },
    // ... (Include all other general relationships you had previously) ...
    { cards: ["The Fool", "The Hermit"], context: [], meaning: "Balancing the impulsive leap of faith with cautious introspection and inner guidance." },
    { cards: ["The Magician", "The Tower"], context: [], meaning: "Attempting to control or manifest in a situation destined for sudden breakdown or release." },
    { cards: ["The Empress", "Temperance"], context: [], meaning: "Nurturing and creativity are enhanced by balance, patience, and moderation." },
    { cards: ["The Emperor", "Justice"], context: [], meaning: "Authority, structure, and control are closely tied to matters of truth, fairness, and law." },
    { cards: ["The Hierophant", "The Lovers"], context: [], meaning: "Traditional guidance or conforming to beliefs influences or is challenged by a significant choice or relationship." },
    { cards: ["The Chariot", "The World"], context: [], meaning: "Focused willpower and determination lead directly to successful completion and fulfillment." },
    { cards: ["Strength", "The Hermit"], context: [], meaning: "Finding the inner courage and gentle power needed for deep introspection and solitude." },
    { cards: ["Wheel of Fortune", "Death"], context: [], meaning: "A major turning point or fated event brings about inevitable transformation and endings." },
    { cards: ["The Hanged Man", "The Star"], context: [], meaning: "Surrendering to a new perspective or sacrifice leads to renewed hope, inspiration, and healing." },
    { cards: ["The Devil", "Judgement"], context: [], meaning: "Facing and overcoming bondage or negative patterns leads to a significant period of evaluation, reckoning, and awakening." },
     { cards: ["The Tower", "The Devil"], context: [], meaning: "A sudden upheaval or breakdown reveals underlying unhealthy attachments or limitations." }, // Added missing general
    { cards: ["The Star", "The Sun"], context: [], meaning: "Hope, inspiration, and healing blossom into pure joy, vitality, and success." }, // Added missing general
     { cards: ["Judgement", "The World"], context: [], meaning: "A period of evaluation and awakening culminates in completion, fulfillment, and successful integration." }, // Added missing general
    { cards: ["The Lovers", "The Chariot"], context: [], meaning: "A significant decision leads to a need for focused will power and direction." }, // Added missing general


    // General Major + Minor Relationships
    { cards: ["The Magician", "Ace of Wands"], context: [], meaning: "Using your will and resources to manifest a powerful new creative beginning or inspiration." },
    { cards: ["The Empress", "Three of Cups"], context: [], meaning: "Nurturing and abundance lead to celebration, friendship, and community." },
    { cards: ["The Emperor", "Four of Pentacles"], context: [], meaning: "Applying structure and control to build and maintain material security." },
    { cards: ["The Hierophant", "Six of Pentacles"], context: [], meaning: "Following traditional paths regarding generosity, charity, or balanced giving and receiving." },
    { cards: ["The Chariot", "Eight of Wands"], context: [], meaning: "Rapid forward movement, potentially involving travel or swift communication, driven by focused will." },
    { cards: ["Strength", "Eight of Pentacles"], context: [], meaning: "Applying patience, inner strength, and compassion to master a skill or craft." },
    { cards: ["The Hermit", "Four of Swords"], context: [], meaning: "A period of introspection and seeking inner truth calls for rest, withdrawal, and mental recuperation." },
    { cards: ["Justice", "Ace of Swords"], context: [], meaning: "Truth and fairness bring clarity and a breakthrough, leading to a new understanding." },
    { cards: ["Death", "Ten of Swords"], context: [], meaning: "A profound, sometimes difficult, transformation or ending brings absolute finality." },
    { cards: ["Temperance", "Two of Pentacles"], context: [], meaning: "Maintaining balance and harmony while juggling multiple responsibilities or resources." },
    { cards: ["The Devil", "Five of Pentacles"], context: [], meaning: "Entrapment in materialism or negative patterns leads to feelings of poverty, isolation, or hardship." },
    { cards: ["The Tower", "Five of Swords"], context: [], meaning: "A sudden collapse or upheaval results in conflict, defeat, or loss." },
    { cards: ["The Star", "Nine of Cups"], context: [], meaning: "Hope, inspiration, and faith contribute to achieving emotional satisfaction and wish fulfillment." },
    { cards: ["The Moon", "Seven of Cups"], context: [], meaning: "Navigating confusion, illusion, and subconscious fears while facing multiple enticing but potentially deceptive choices or fantasies." },
    { cards: ["The Sun", "Ten of Cups"], context: [], meaning: "Great joy, success, and vitality lead to emotional harmony, family happiness, and fulfillment." },
    { cards: ["The World", "Ten of Pentacles"], context: [], meaning: "Completion and fulfillment on your journey are tied to material security, legacy, and family abundance." },
    // ... (Include other Major + Minor general relationships) ...
     { cards: ["The Fool", "Ace of Swords"], context: [], meaning: "Taking a leap of faith based on a sudden breakthrough idea or moment of clarity." },
     { cards: ["The Magician", "King of Pentacles"], context: [], meaning: "Manifesting material success and stability through skillful use of resources and leadership." },
     { cards: ["The High Priestess", "Queen of Cups"], context: [], meaning: "Deep intuition and subconscious wisdom are embodied by a compassionate, emotionally secure figure." },
     { cards: ["The Empress", "Queen of Pentacles"], context: [], meaning: "Nurturing energy and abundance are expressed through practical support, home, and financial security." },
     { cards: ["The Emperor", "King of Swords"], context: [], meaning: "Authority and structure are applied with clear intellect, logic, and impartial judgment." },
     { cards: ["The Lovers", "Two of Cups"], context: [], meaning: "A significant choice or relationship is centered around partnership, unity, and mutual connection." },
     { cards: ["The Chariot", "Six of Wands"], context: [], meaning: "Willpower and determination lead to victory, recognition, and public acknowledgment of success." },
     { cards: ["Strength", "Knight of Wands"], context: [], meaning: "Inner strength and courage are needed to manage or direct passionate, energetic, and adventurous action." },
     { cards: ["The Hermit", "Seven of Swords"], context: [], meaning: "Seeking solitude or inner guidance might be necessary to navigate deception, trickery, or cunning strategies." },
     { cards: ["Wheel of Fortune", "Ten of Wands"], context: [], meaning: "A turn of fate or destiny brings about a heavy burden or significant responsibility." },
     { cards: ["Justice", "Two of Swords"], context: [], meaning: "Seeking fairness and truth while facing a difficult decision or stalemate." },
     { cards: ["The Hanged Man", "Eight of Swords"], context: [], meaning: "Seeing a situation from a new perspective or making a sacrifice is key to overcoming feelings of restriction, powerlessness, or being trapped." },
     { cards: ["Death", "Three of Swords"], context: [], meaning: "A painful ending or transformation is associated with heartbreak, sorrow, or loss." },
     { cards: ["Temperance", "Five of Wands"], context: [], meaning: "Finding balance and moderation is essential when navigating conflict, competition, or disagreement." },
     { cards: ["The Devil", "Nine of Swords"], context: [], meaning: "Entrapment, addiction, or negative patterns contribute significantly to anxiety, worry, and nightmares." },
     { cards: ["The Tower", "Eight of Swords"], context: [], meaning: "A sudden breakdown or crisis leads to feeling restricted, powerless, or trapped by circumstances." },
     { cards: ["The Star", "Six of Cups"], context: [], meaning: "Hope and healing for the future are connected to revisiting or finding solace in happy childhood memories or nostalgia." },
     { cards: ["The Moon", "Page of Cups"], context: [], meaning: "Navigating subconscious realms and intuition may involve receiving new emotional messages or creative inspirations." },
     { cards: ["The Sun", "Four of Wands"], context: [], meaning: "Joy and success lead to celebration, harmony, and a feeling of homecoming or security." },
     { cards: ["Judgement", "Ace of Cups"], context: [], meaning: "A period of awakening or significant decision brings about a powerful new emotional beginning or flow." },
     { cards: ["The World", "Four of Pentacles"], context: [], meaning: "Achieving completion and fulfillment solidifies material security and a sense of stable foundation." },
      { cards: ["The Fool", "Page of Wands"], context: [], meaning: "Embracing a new adventure with curiosity and enthusiasm." },
    { cards: ["The Magician", "Two of Pentacles"], context: [], meaning: "Using your power to skillfully balance multiple aspects of your life." },
    { cards: ["The High Priestess", "Seven of Cups"], context: [], meaning: "Intuition is needed to navigate confusing choices or illusions." },
    { cards: ["The Empress", "Nine of Pentacles"], context: [], meaning: "Nurturing abundance and enjoying self-sufficiency and material comfort." },
    { cards: ["The Emperor", "King of Wands"], context: [], meaning: "Structure and authority combine with visionary leadership and action." },
    { cards: ["The Hierophant", "Five of Swords"], context: [], meaning: "Traditional beliefs or group conformity are challenged by conflict or defeat." },
    { cards: ["The Chariot", "Ten of Swords"], context: [], meaning: "Driving forward with willpower leads unexpectedly to a sudden, complete ending." },
    { cards: ["Strength", "Nine of Wands"], context: [], meaning: "Inner courage and resilience are needed to stand firm and defend yourself after past challenges." },
    { cards: ["The Hermit", "Eight of Cups"], context: [], meaning: "Seeking solitude and introspection leads to withdrawing from unsatisfying situations to find deeper meaning." },
    { cards: ["Wheel of Fortune", "Three of Wands"], context: [], meaning: "A fated turning point opens the door for expansion and future planning." },
    { cards: ["Justice", "Six of Pentacles"], context: [], meaning: "Fairness and truth bring about a situation of balanced giving and receiving or charity." },
    { cards: ["The Hanged Man", "Four of Cups"], context: [], meaning: "A change in perspective or necessary sacrifice stems from feeling apathetic or disconnected." },
    { cards: ["Temperance", "Six of Swords"], context: [], meaning: "Finding balance and moderation facilitates a smooth transition or moving on from difficulty." },
    { cards: ["The Devil", "Two of Swords"], context: [], meaning: "Entrapment or negative patterns lead to a difficult, paralyzing decision or stalemate." },
    { cards: ["The Tower", "Eight of Wands"], context: [], meaning: "Sudden upheaval or chaos is followed by rapid developments or swift communication." },
    { cards: ["The Star", "Page of Cups"], context: [], meaning: "Hope and inspiration bring forth new emotional or creative opportunities." },
    { cards: ["The Moon", "Five of Cups"], context: [], meaning: "Confusion, illusion, or subconscious fears are tied to feelings of loss, grief, or disappointment." },
    { cards: ["Judgement", "Three of Swords"], context: [], meaning: "A period of evaluation or awakening is brought about by or involves facing heartbreak or sorrow." },
    { cards: ["The World", "Nine of Cups"], context: [], meaning: "Completion and fulfillment include achieving emotional satisfaction and wish fulfillment." },


    // General Minor Arcana Combinations
    { cards: ["Ace of Cups", "Ace of Wands"], context: [], meaning: "A new emotional beginning sparks a powerful new creative impulse or opportunity." },
    { cards: ["Ace of Pentacles", "Ace of Swords"], context: [], meaning: "A new financial opportunity or venture brings mental clarity and a breakthrough idea." },
    { cards: ["Two of Pentacles", "Two of Swords"], context: [], meaning: "Juggling resources or commitments while facing a difficult decision or stalemate." },
    { cards: ["Three of Wands", "Six of Pentacles"], context: [], meaning: "Planning for expansion or future ventures involves balanced giving and receiving, or generosity." },
    { cards: ["Five of Cups", "Eight of Cups"], context: [], meaning: "Mourning a loss or disappointment leads to leaving the situation behind to seek something more fulfilling." },
     { cards: ["Seven of Swords", "Three of Cups"], context: [], meaning: "Deception, trickery, or acting independently impacts friendships, celebrations, or community harmony." },
    { cards: ["Eight of Wands", "Knight of Swords"], context: [], meaning: "Rapid movement and action are driven by a fast, ambitious, and sometimes impulsive intellectual energy." },
    { cards: ["Nine of Swords", "Four of Swords"], context: [], meaning: "Intense anxiety and worry highlight a desperate need for rest, withdrawal, and mental recuperation." },
     // ... (Include other Minor Arcana general combinations) ...
     { cards: ["Two of Cups", "Seven of Cups"], context: [], meaning: "A relationship or partnership is clouded by confusion, illusion, or unrealistic choices." },
     { cards: ["Three of Swords", "Six of Cups"], context: [], meaning: "Heartbreak or sorrow is soothed by revisiting fond memories or finding comfort in the past." },
     { cards: ["Four of Pentacles", "Seven of Pentacles"], context: [], meaning: "Focusing on material security and control may require patience and long-term investment before seeing significant results." },
     { cards: ["Five of Wands", "Ten of Wands"], context: [], meaning: "Conflict and competition lead to feeling burdened and overwhelmed by responsibilities." },
     { cards: ["Six of Swords", "Ace of Wands"], context: [], meaning: "Moving on from a difficult situation is sparked by a new creative opportunity or burst of inspiration." },
     { cards: ["Eight of Cups", "Page of Swords"], context: [], meaning: "Leaving something behind to seek deeper meaning may involve gathering information or approaching the situation with intellectual curiosity." },
     { cards: ["Nine of Pentacles", "King of Pentacles"], context: [], meaning: "Self-sufficiency and material abundance are supported or embodied by a master of the material world and business." },
     { cards: ["Ten of Swords", "Ace of Pentacles"], context: [], meaning: "Hitting rock bottom or experiencing a complete ending paradoxically opens the door for a brand new financial or material opportunity." },
     { cards: ["Two of Cups", "Two of Wands"], context: [], meaning: "A relationship or partnership leads to making plans or decisions for the future." }, // Corrected re-added combination
     { cards: ["Three of Pentacles", "Six of Swords"], context: [], meaning: "Collaboration or teamwork is key to successfully moving on from a difficult situation." }, // Corrected re-added combination
     { cards: ["Four of Wands", "Nine of Swords"], context: [], meaning: "Celebration and harmony are disrupted by anxiety, worry, or nightmares." }, // Corrected re-added combination
     { cards: ["Five of Pentacles", "Seven of Wands"], context: [], meaning: "Experiencing hardship or isolation requires perseverance and defense to maintain control." }, // Corrected re-added combination
     { cards: ["Eight of Wands", "Ace of Swords"], context: [], meaning: "Rapid action or communication brings about a sudden breakthrough or moment of clarity." }, // Corrected re-added combination
     { cards: ["Nine of Cups", "King of Wands"], context: [], meaning: "Emotional satisfaction and wish fulfillment are facilitated by a visionary, energetic leader." }, // Corrected re-added combination
     { cards: ["Ten of Pentacles", "Four of Swords"], context: [], meaning: "Long-term material security and family stability are achieved through or require a period of rest and recuperation." }, // Corrected re-added combination


    // General Court Card Combinations
    { cards: ["Page of Cups", "Knight of Wands"], context: [], meaning: "New emotional or creative impulses are met with energetic, passionate action." },
    { cards: ["Knight of Swords", "Queen of Pentacles"], context: [], meaning: "Intellectual ambition and rapid action interact with grounded, practical, and nurturing energy." },
    { cards: ["Queen of Wands", "King of Cups"], context: [], meaning: "Vibrant, confident energy blends with emotional maturity, balance, and diplomacy." },
    { cards: ["Page of Pentacles", "Page of Swords"], context: [], meaning: "New opportunities for learning and growth in both the material/practical realm and the intellectual/communicative realm." },
    { cards: ["King of Swords", "Queen of Swords"], context: [], meaning: "Two strong intellectual forces, one embodying logical authority and the other clear boundaries and direct communication." },
     { cards: ["Page of Swords", "Knight of Wands"], context: [], meaning: "Intellectual curiosity and gathering information fuels passionate, adventurous action." }, // Corrected re-added combination
     { cards: ["Knight of Cups", "Queen of Swords"], context: [], meaning: "Romantic or imaginative energy meets clear boundaries and sharp intellect." }, // Corrected re-added combination


    // Specific Context Relationships (Context [Pos1, Pos2, ...])
    // These match if Card 1 is in ANY listed context position AND Card 2 is in ANY *OTHER* listed context position.
    { cards: ["The Fool", "The World"], context: ["Past", "Outcome"], meaning: "Your journey of new beginnings (The Fool in the Past) culminates in completion and fulfillment (The World in the Outcome)." },
     { cards: ["The Tower", "Death"], context: ["Challenge", "Future"], meaning: "An immediate upheaval (The Tower in Challenge) is likely to bring about profound transformation (Death in the Future)." },
    { cards: ["The Magician", "The Devil"], context: ["Present", "Challenge"], meaning: "Your current ability to manifest (The Magician in Present) is being challenged by feelings of entrapment, addiction, or materialism (The Devil in Challenge)." },
    { cards: ["The Empress", "The Tower"], context: ["Above", "Future"], meaning: "Your desired outcome or highest potential (The Empress in Above) faces a likely future of sudden change or upheaval (The Tower in Future)." },
    { cards: ["The Chariot", "The Hermit"], context: ["Advice", "Future"], meaning: "The recommended action is to move forward with determination (The Chariot as Advice), but the future suggests a need for introspection and withdrawal (The Hermit in Future)." },
    { cards: ["Wheel of Fortune", "The Lovers"], context: ["Past", "Present"], meaning: "A past turn of fate or destiny (Wheel of Fortune in Past) led directly to your current significant choice or relationship (The Lovers in Present)." },
    { cards: ["Five of Cups", "Ace of Cups"], context: ["Past", "Advice"], meaning: "Past disappointment or loss (Five of Cups in Past) suggests the advice is to open yourself to a new emotional beginning or flow (Ace of Cups as Advice)." },
    { cards: ["Ten of Swords", "The World"], context: ["Past", "Outcome"], meaning: "A complete ending or rock bottom experience from the past (Ten of Swords in Past) has ultimately led to completion, fulfillment, and integration as the outcome (The World in Outcome)." },
    { cards: ["Page of Wands", "The Fool"], context: ["Advice", "Outcome"], meaning: "The advice is to approach things with curiosity and exploration (Page of Wands as Advice), which will ultimately lead to embracing a brand new, exciting journey (The Fool in Outcome)." },
     { cards: ["Justice", "Eight of Swords"], context: ["Advice", "Challenge"], meaning: "The advice is to seek truth, fairness, and accountability (Justice as Advice), but you face challenges related to feeling restricted, powerless, or trapped (Eight of Swords in Challenge)." },
    { cards: ["Death", "The Sun"], context: ["Past", "Outcome"], meaning: "A significant ending or transformation from the past (Death in Past) culminates in joy, success, and vitality as the outcome (The Sun in Outcome)." },
     { cards: ["Temperance", "The Devil"], context: ["Advice", "Challenge"], meaning: "The advice is to find balance and moderation (Temperance as Advice), which is challenged by feelings of entrapment, addiction, or materialism (The Devil in Challenge)." },
    { cards: ["The Star", "Three of Cups"], context: ["Future", "Outcome"], meaning: "The future holds hope and inspiration (The Star in Future), leading to celebration, friendship, and community as the outcome (Three of Cups in Outcome)." },
    { cards: ["The Moon", "Four of Swords"], context: ["Hidden Influences", "Advice"], meaning: "Unseen factors involve confusion, illusion, or subconscious fears (The Moon in Hidden Influences), suggesting the advice is to seek rest, withdrawal, and mental recuperation (Four of Swords as Advice)." },
    { cards: ["Five of Swords", "Six of Pentacles"], context: ["Past", "Advice"], meaning: "Past conflict or defeat (Five of Swords in Past) indicates the advice is to practice generosity, charity, or seek balanced giving and receiving (Six of Pentacles as Advice)." },
    { cards: ["Seven of Cups", "Two of Swords"], context: ["Present", "Obstacles"], meaning: "In the present, you are navigating confusing choices or illusions (Seven of Cups in Present), which is an obstacle to making a clear decision (Two of Swords in Obstacles)." },
     { cards: ["Page of Pentacles", "King of Swords"], context: ["Past", "External Influences"], meaning: "A past focus on new practical or financial opportunities (Page of Pentacles in Past) is now influenced by a logical, authoritative figure (King of Swords in External Influences)." },
    { cards: ["Knight of Cups", "The Lovers"], context: ["Present", "Advice"], meaning: "Your current situation involves romantic or imaginative energy (Knight of Cups in Present), and the advice is to make a clear choice or address a relationship matter (The Lovers as Advice)." },
    // Context-specific relationships involving 3 or more positions can be added, but the matching logic would need expansion. Sticking to 2 specific positions for now.
];


// Helper Functions for Numerology and Astrology (No changes needed here)

function calculateLifePath(dobString) {
    if (!dobString) return null;
    try {
        const [year, month, day] = dobString.split('-').map(Number);

        function reduceNumber(num) {
            let sum = 0;
            String(num).split('').forEach(digit => {
                sum += parseInt(digit);
            });
            if (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) { // 11, 22, 33 are Master Numbers
                return reduceNumber(sum);
            }
            return sum;
        }

        const reducedMonth = reduceNumber(month);
        const reducedDay = reduceNumber(day);
        const reducedYear = reduceNumber(year);

        let lifePath = reducedMonth + reducedDay + reducedYear;

        if (lifePath > 9 && lifePath !== 11 && lifePath !== 22 && lifePath !== 33) {
            lifePath = reduceNumber(lifePath);
        }

        return lifePath;
    } catch (e) {
        console.error("Error calculating Life Path:", e);
        return null;
    }
}

function getZodiacSign(dobString) {
    if (!dobString) return null;
     try {
        const [year, month, day] = dobString.split('-').map(Number);
        const date = new Date(year, month - 1, day); // Month is 0-indexed

        if (isNaN(date.getTime())) return null; // Check for invalid date

        if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius";
        if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces";
        if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
        if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus";
        if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini";
        if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer";
        if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
        if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
        if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
        if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio";
        if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius";
        if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricorn";

        return null; // Should not happen if date is valid
     } catch (e) {
        console.error("Error calculating Zodiac:", e);
        return null;
     }
}

function getLifePathMeaning(lifePath) {
    // Provide brief interpretations for each Life Path number (1-9, 11, 22, 33)
    switch (lifePath) {
        case 1: return "leadership, independence, and new beginnings";
        case 2: return "cooperation, harmony, and relationships";
        case 3: return "creativity, self-expression, and communication";
        case 4: return "stability, hard work, and building foundations";
        case 5: return "freedom, change, and adaptability";
        case 6: return "responsibility, nurturing, and service to others";
        case 7: return "introspection, spirituality, and analytical thinking";
        case 8: return "power, ambition, and material abundance";
        case 9: return "humanitarianism, wisdom, and completion";
        case 11: return "inspiration, intuition, and spiritual insight (Master Number)";
        case 22: return "manifestation, building on a large scale, and practical idealism (Master Number)";
        case 33: return "compassion, healing, and mastery of love (Master Number)";
        default: return "your unique journey"; // Fallback
    }
}

function getZodiacMeaning(zodiacSign) {
    // Provide brief interpretations for each Zodiac sign
    switch (zodiacSign) {
        case "Aries": return "action, initiative, and courage";
        case "Taurus": return "stability, sensuality, and determination";
        case "Gemini": return "communication, adaptability, and curiosity";
        case "Cancer": return "nurturing, emotional depth, and home life";
        case "Leo": return "creativity, confidence, and self-expression";
        case "Virgo": return "practicality, analysis, and service";
        case "Libra": return "balance, relationships, and harmony";
        case "Scorpio": return "transformation, intensity, and power";
        case "Sagittarius": return "exploration, philosophy, and optimism";
        case "Capricorn": return "discipline, ambition, and structure";
        case "Aquarius": return "innovation, humanitarianism, and independence";
        case "Pisces": return "intuition, compassion, and spirituality";
        default: return "your inherent traits"; // Fallback
    }
}

function getColorMeaning(colorName) {
    // Provide brief interpretations for the color names you are using
    // Base Major Arcana/Pip colors first, then suit colors if they are different
    switch (colorName) {
        case "Yellow": return "optimism, intellect, and joy";
        case "Fire Brick": // or Red
        case "Crimson":
        case "Maroon": return "passion, energy, and intensity";
        case "Dark Blue":
        case "Royal Blue": // Cups
        case "Steel Blue": return "emotion, intuition, and depth";
        case "Pink":
        case "Hot Pink": return "love, compassion, and emotional healing";
        case "Light Steel Blue": // or Light Blue/Gray
        case "Light Blue":
        case "Sky Blue": return "serenity, clarity, and peace";
        case "Goldenrod": // or Gold
        case "Gold": return "abundance, power, and success";
        case "Dark Gray":
        case "Gray": // Swords
        case "White": return "clarity, truth, and objectivity"; // White often represents purity/truth, Gray neutrality/intellect
        case "Indigo": // or Dark Purple
        case "Plum": // or Light Purple
        case "Purple": return "spirituality, mystery, and wisdom"; // Assuming a range of purples might imply similar themes
        case "Cyan": // or Aqua
        case "Light Green":
        case "Forest Green": // Pentacles
        case "Lime Green": return "growth, health, and vitality"; // Assuming various greens relate to these themes
        case "Black": return "endings, mystery, and potential";
        case "Orange":
        case "Orange Red": // Wands
            return "creativity, enthusiasm, and action";
        default: return "its associated concepts"; // Fallback
    }
}


// Fisher-Yates Shuffle Algorithm (No changes needed here)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Draw Cards from the Deck (No changes needed here)
function drawCards(deck, num, useReversals) {
    const shuffled = shuffle([...deck]);
    return shuffled.slice(0, num).map(card => ({
        ...card,
        isReversed: useReversals ? Math.random() < 0.5 : false
    }));
}

// Categorize the Question (No changes needed here)
function categorizeQuestion(question) {
    const qLower = question.toLowerCase();
    if (/love|relationship|partner|heart/i.test(qLower)) return "love and relationships";
    if (/career|job|work|business|money|finance|wealth/i.test(qLower)) return "career and finances";
    if (/health|body|energy|wellness/i.test(qLower)) return "health and well-being";
    if (/spiritual|growth|self|meaning|purpose/i.test(qLower)) return "spiritual path and personal growth";
    if (/family|home|move|living/i.test(qLower)) return "home and family";
    if (/decision|choice|direction/i.test(qLower)) return "a decision or path forward";
    return "yourself"; // Keep "yourself" as requested
}

// Generate Interpretation - ENHANCED
function generateInterpretation(reading, readerName, question, spreadType, lifePath, zodiacSign) {
    const spread = spreads[spreadType];
    const category = categorizeQuestion(question);

    let interpretationHTML = "";

    // --- Introduction & Personal Context ---
    interpretationHTML += `<h2>Reading for ${readerName || 'Seeker'}</h2>`;

    let personalIntro = "<p>This reading seeks guidance ";
    if (readerName && lifePath !== null && zodiacSign) {
         personalIntro += `for <strong>${readerName}</strong>, whose energies are shaped by a Life Path ${lifePath} (${getLifePathMeaning(lifePath)}) and being a ${zodiacSign} (${getZodiacMeaning(zodiacSign)}). We'll explore how your innate energies interweave with the current situation.`;
    } else if (readerName && lifePath !== null) {
         personalIntro += `for <strong>${readerName}</strong>, whose Life Path is ${lifePath} (${getLifePathMeaning(lifePath)}), exploring how this core energy influences this reading.`;
    } else if (readerName && zodiacSign) {
         personalIntro += `for <strong>${readerName}</strong>, a ${zodiacSign} (${getZodiacMeaning(zodiacSign)}), considering how your inherent traits relate to this reading.`;
    } else if (lifePath !== null && zodiacSign) {
         personalIntro += `informed by your Life Path ${lifePath} (${getLifePathMeaning(lifePath)}) and your ${zodiacSign} traits (${getZodiacMeaning(zodiacSign)}).`;
    } else if (lifePath !== null) {
         personalIntro += `informed by your Life Path ${lifePath} (${getLifePathMeaning(lifePath)}).`;
    } else if (zodiacSign) {
         personalIntro += `informed by your ${zodiacSign} traits (${getZodiacMeaning(zodiacSign)}).`;
    } else if (readerName) { // Only name provided
        personalIntro += ` for <strong>${readerName}</strong>.`;
    }


     personalIntro += ` Using the <strong>${spread.name}</strong> spread`;
     personalIntro += question ? `, this reading offers a perspective focusing on your question about <strong>${category}</strong>.` : ` addresses matters concerning <strong>${category}</strong>.`;

    interpretationHTML += personalIntro + "</p>";

    // Explicitly state the question if one was asked
    if (question) {
         interpretationHTML += `<p>Your specific inquiry: <strong>"${question}"</strong></p>`;
    }

    interpretationHTML += `<p>The cards drawn reflect the energies surrounding this matter, providing insight into the past, present, and potential future.</p>`;

    // --- Calculation of Themes ---
    const typeCounts = reading.reduce((acc, item) => {
        const type = item.card.isMajor ? "Major Arcana" : item.card.suit;
        acc[type] = (acc[type] || 0) + 1;
        return acc;
    }, {});

    const rankCounts = reading.reduce((acc, item) => {
         const rank = item.card.isMajor ? 'Major Arcana' : (typeof item.card.rank === 'number' ? item.card.rank : item.card.rank);
         acc[rank] = (acc[rank] || 0) + 1;
         return acc;
    }, {});

    const colors = reading.reduce((acc, item) => {
         const color = item.card.color || 'None';
         acc[color] = (acc[color] || 0) + 1;
         return acc;
    }, {});

    const sortedTypes = Object.entries(typeCounts).sort((a, b) => b[1] - a[1]);
    const sortedColors = Object.entries(colors).sort((a, b) => b[1] - a[1]);
    const dominantColorHex = sortedColors.length > 0 && sortedColors[0][0] !== 'None' ? sortedColors[0][0] : null;
    const dominantColorName = dominantColorHex ? colorMap[dominantColorHex] || dominantColorHex : null;


    // Add Numerical/Rank Themes
    const significantRanks = Object.entries(rankCounts)
        .filter(([rank, count]) => count > 1 && rank !== 'Major Arcana') // Focus on multiple pips or court types appearing more than once
        .sort((a, b) => b[1] - a[1]);


    // --- Overall Themes ---
    interpretationHTML += "<h2>Overall Themes and Energies</h2><ul>";

    if (reading.length === 1) {
         interpretationHTML += `<li>This is a single-card reading, providing a focused insight into the ${spread.positions[0].name} aspect of your question.</li>`;
    } else {
         sortedTypes.forEach(([type, count]) => {
            if (count > 0) {
                 let meaning = "";
                 if (type === "Major Arcana") meaning = "suggest significant life events or transformative lessons at play, indicating this is a pivotal moment.";
                 else if (type === "Cups") meaning = "place a strong emphasis on emotions, relationships, and intuition in your current situation.";
                 else if (type === "Pentacles") meaning = "bring focus to material matters, work, and stability, grounding the reading in the practical realm.";
                 else if (type === "Swords") meaning = "highlight thoughts, conflicts, and intellectual challenges, suggesting the mind is highly active or troubled.";
                 else if (type === "Wands") meaning = "point towards energy, creativity, and action, indicating a period of dynamic movement or inspiration.";
                 interpretationHTML += `<li>A notable presence of <strong>${type}</strong> (${count} card${count > 1 ? 's' : ''}) ${meaning}</li>`;
            }
        });

        if (significantRanks.length > 0) {
            significantRanks.forEach(([rank, count]) => {
                let rankMeaning = "";
                 if (typeof rank === 'number') {
                      if (rank === 1) rankMeaning = "new beginnings, potential, or core energy.";
                      else if (rank === 2) rankMeaning = "balance, duality, choices, or partnership.";
                      else if (rank === 3) rankMeaning = "growth, collaboration, or initial results.";
                      else if (rank === 4) rankMeaning = "stability, structure, or foundation.";
                      else if (rank === 5) rankMeaning = "conflict, change, or instability.";
                      else if (rank === 6) rankMeaning = "harmony, resolution, or adjustment.";
                      else if (rank === 7) rankMeaning = "reflection, challenge, or perseverance.";
                      else if (rank === 8) rankMeaning = "action, mastery, or movement.";
                      else if (rank === 9) rankMeaning = "culmination, fulfillment, or nearing completion.";
                      else if (rank === 10) rankMeaning = "completion, culmination, or a final outcome.";
                 } else if (rank === 'Page') rankMeaning = "new messages, opportunities, or youthful energy.";
                 else if (rank === 'Knight') rankMeaning = "action, movement, or focused energy.";
                 else if (rank === 'Queen') rankMeaning = "nurturing, emotional mastery, or inner knowing.";
                 else if (rank === 'King') rankMeaning = "authority, mastery, or leadership.";

                 if (rankMeaning) {
                     interpretationHTML += `<li>Numerically, a strong presence of the <strong>${rank}</strong> (${count} card${count > 1 ? 's' : ''}) highlights themes of ${rankMeaning}</li>`;
                 }
            });
        } else if (typeCounts['Major Arcana'] > reading.length / 2) { // If many Majors, less focus on pip numbers
             interpretationHTML += `<li>The significant number of Major Arcana cards means the numerical progression of the pips is less central, highlighting significant life lessons over sequential development.</li>`;
        } else if (reading.length > 1) { // Only mention balanced if there's more than one card and no significant repeating rank
             interpretationHTML += `<li>The numerical distribution across the cards is relatively balanced, suggesting various stages of development are present in this situation.</li>`;
        }


        if (dominantColorName) {
             interpretationHTML += `<li>The dominant color theme is <strong>${dominantColorName}</strong> (associated with ${dominantColorHex}), which resonates strongly with themes of ${getColorMeaning(dominantColorName)}. Consider how these energies color the entire reading.</li>`;
        }


        const reversedCount = reading.filter(item => item.isReversed).length;
        if (reversedCount > 0) {
             const reversedPercentage = (reversedCount / reading.length) * 100;
             let reversedMeaning = "";
             if (reversedPercentage >= 70) reversedMeaning = "suggesting significant blockages, internal conflict, or a need for deep introspection is required to move forward.";
             else if (reversedPercentage >= 40) reversedMeaning = "indicating some challenges, delays, or areas requiring internal reflection before progress can be made.";
             else reversedMeaning = "pointing to minor internal hesitations or subtle imbalances that may need attention.";

            interpretationHTML += `<li>${reversedCount} card${reversedCount > 1 ? 's' : ''} (${reversedPercentage.toFixed(0)}%) appeared in <strong>reversed</strong> orientation, ${reversedMeaning}</li>`;
        } else if (reading.length > 0) { // Only mention if there's at least one card
            interpretationHTML += `<li>All cards appeared in <strong>upright</strong> orientation, suggesting energies are flowing freely and directly in this situation.</li>`;
        }
    } // End check for reading.length === 1

    interpretationHTML += "</ul>";


    // --- Individual Card Placements ---
    interpretationHTML += `<h2>Card Placements in the ${spread.name}</h2><ul>`;
    reading.forEach(item => {
        const posDef = spread.positions.find(p => p.name === item.position);
        const posDesc = posDef ? posDef.description : item.position; // Fallback to name if description not found
        const cardName = item.card.name;
        const cardOrientation = item.isReversed ? 'reversed' : 'upright';
        const cardColorName = colorMap[item.card.color] || item.card.color || 'None';
        const cardMeaning = item.meaning; // This is already the orientation-specific meaning

        // Add rank/type significance to individual card interpretation
        let rankSig = "";
        if (item.card.isMajor) {
             rankSig = `As Major Arcana ${item.card.rank}, this card represents a significant life lesson or archetype `;
        } else {
             let rankType = typeof item.card.rank === 'number' ? `the number ${item.card.rank}` : item.card.rank;
             rankSig = `As the ${rankType} of ${item.card.suit}, it focuses on issues of ${rankType === 'Page' ? 'new beginnings/messages' : rankType === 'Knight' ? 'action/pursuit' : rankType === 'Queen' ? 'emotional mastery/nurturing' : rankType === 'King' ? 'authority/control' : 'stage-specific development'} within that realm. `;
        }


        interpretationHTML += `<li>In the <strong>${item.position}</strong> position (${posDesc}), you drew the <strong>${cardName}</strong> (${cardOrientation}). ${rankSig}`;
        // Provide the contextual meaning clearly
        interpretationHTML += `In this position, signifying ${posDesc}, this card indicates: <strong>${cardMeaning}</strong>.`;
        // Optional: Mention color energy related to this specific card
         if (cardColorName !== 'None') {
              interpretationHTML += ` The color ${cardColorName} associated with this card adds an energetic layer related to ${getColorMeaning(cardColorName)}.`;
         }
        interpretationHTML += `</li>`;
    });
    interpretationHTML += "</ul>";


    // --- Deeper Connections and Patterns (Enhanced) ---
    interpretationHTML += "<h2>Interactions and Relationships Between Cards</h2><ul>";
     let relationshipFound = false;
     const foundRelationships = []; // Store relationships to reference in synthesis

     if (reading.length > 1) { // Relationships are only meaningful with more than one card
         // Find all potential relationships involving cards drawn in the reading
         cardRelationships.forEach(rel => {
             const card1Name = rel.cards[0];
             const card2Name = rel.cards.length > 1 ? rel.cards[1] : null; // Only check for a second card if it exists

             if (!card2Name) return; // Skip if relationship doesn't define two cards

             const item1 = reading.find(item => item.card.name === card1Name);
             const item2 = reading.find(item => item.card.name === card2Name);

             // Check if both cards are present
             if (item1 && item2) {
                 // Check for general relationships (context: [])
                 if (rel.context.length === 0) {
                      foundRelationships.push({
                          type: 'general',
                          cards: [item1, item2],
                          meaning: rel.meaning
                      });
                      relationshipFound = true;
                 } else {
                     // Check for specific contextual relationships (context: ["Pos1", "Pos2", ...])
                     // Check if Card1 is in ANY listed context position AND Card2 is in ANY *OTHER* listed context position from the context list
                     const item1PosMatch = rel.context.includes(item1.position);
                     const item2PosMatch = rel.context.includes(item2.position);

                     if (item1PosMatch && item2PosMatch && item1.position !== item2.position) {
                          // Found a specific contextual match
                          foundRelationships.push({
                              type: 'contextual',
                              cards: [item1, item2],
                              meaning: rel.meaning
                          });
                          relationshipFound = true;
                     }
                 }
             }
         });

         // Display the found relationships
         if (foundRelationships.length > 0) {
              foundRelationships.forEach(foundRel => {
                  const item1 = foundRel.cards[0];
                  const item2 = foundRel.cards[1];
                  let relationshipText = "";

                  if (foundRel.type === 'general') {
                      relationshipText = `A general theme emerges from the presence of <strong>${item1.card.name}</strong> and <strong>${item2.card.name}</strong> in this reading. ${foundRel.meaning}`;
                  } else { // type === 'contextual'
                       const posDesc1 = spread.positions.find(p => p.name === item1.position).description;
                       const posDesc2 = spread.positions.find(p => p.name === item2.position).description;
                       relationshipText = `Within the context of the spread, the relationship between <strong>${item1.card.name}</strong> (in the ${item1.position} position - ${posDesc1}) and <strong>${item2.card.name}</strong> (in the ${item2.position} position - ${posDesc2}) is significant. ${foundRel.meaning}`;
                  }
                  interpretationHTML += `<li>${relationshipText}</li>`;
              });
         }
     }


     if (!relationshipFound) {
         interpretationHTML += "<li>No specific relationship patterns were identified among the drawn cards based on predefined combinations. The focus rests more strongly on the individual card messages and overall themes.</li>";
     }
    interpretationHTML += "</ul>";


    // --- Connections to Your Energy (Life Path & Zodiac) - Enhanced ---
    if (lifePath !== null || zodiacSign) {
         interpretationHTML += "<h2>Connections to Your Personal Energy</h2><ul>";
         let personalConnectionsFound = false;

         // Basic correspondences (can be expanded)
         const suitElement = {
             "Wands": "Fire", "Cups": "Water", "Swords": "Air", "Pentacles": "Earth"
         };
         const zodiacElements = {
             "Aries": "Fire", "Leo": "Fire", "Sagittarius": "Fire",
             "Cancer": "Water", "Scorpio": "Water", "Pisces": "Water",
             "Gemini": "Air", "Libra": "Air", "Aquarius": "Air",
             "Taurus": "Earth", "Virgo": "Earth", "Capricorn": "Earth"
         };

         // Check Suit/Element resonance with Zodiac
         if (zodiacSign) {
             const userElement = zodiacElements[zodiacSign];
             if (userElement) {
                  const resonantSuits = Object.keys(suitElement).filter(suit => suitElement[suit] === userElement);
                  const resonantCards = reading.filter(item => resonantSuits.includes(item.card.suit));
                  if (resonantCards.length > 0) {
                       interpretationHTML += `<li>As a <strong>${zodiacSign}</strong>, whose energy is aligned with the <strong>${userElement}</strong> element, the presence of <strong>${resonantSuits.join(' and ')}</strong> cards in your reading (${resonantCards.map(c => c.card.name).join(', ')}) may indicate themes related to ${getZodiacMeaning(zodiacSign)} are particularly emphasized or active now.</li>`;
                       personalConnectionsFound = true;
                  } else {
                       interpretationHTML += `<li>As a <strong>${zodiacSign}</strong> (${userElement} energy), the absence of your resonant element's suit (<strong>${resonantSuits.join(' and ')}</strong>) might suggest the current situation is pushing you outside your comfort zone or requires a focus on other energies.</li>`;
                       personalConnectionsFound = true; // Still a connection, just an inverse one
                  }
             }
         }

         // Check Major Arcana resonance with Life Path (using rank as a proxy)
         if (lifePath !== null) {
              const lifePathCard = deck.find(card => card.isMajor && card.rank === lifePath); // Find the actual Life Path Major Arcana card
              if (lifePathCard) {
                   const drawnLifePathCardItem = reading.find(item => item.card.name === lifePathCard.name);
                   if (drawnLifePathCardItem) {
                        const posDesc = spread.positions.find(p => p.name === drawnLifePathCardItem.position).description;
                        interpretationHTML += `<li>Your <strong>Life Path Number ${lifePath}</strong> is associated with The <strong>${lifePathCard.name}</strong>, which appeared in the <strong>${drawnLifePathCardItem.position}</strong> position (${posDesc}). This strongly suggests that lessons or themes directly related to your core life purpose (${getLifePathMeaning(lifePath)}) are central to this aspect of your reading right now.</li>`;
                         personalConnectionsFound = true;
                   } else {
                       interpretationHTML += `<li>Your <strong>Life Path Number ${lifePath}</strong> is associated with The <strong>${lifePathCard.name}</strong>. While this card was not drawn, its absence might suggest you are currently navigating lessons that are foundational or prerequisite to fully embodying your Life Path energy (${getLifePathMeaning(lifePath)}), or that this aspect of your journey is not the primary focus of this specific reading.</li>`;
                       personalConnectionsFound = true; // Absence is also a form of connection/information
                   }
              }
              // Could add more checks here for other numbers/patterns resonating with Life Path stages
         }

         // Check dominant color resonance with personal energy
         if (dominantColorName && (lifePath !== null || zodiacSign)) {
             let personalLink = "";
             if (lifePath !== null && zodiacSign) personalLink = `your Life Path ${lifePath} and ${zodiacSign} traits`;
             else if (lifePath !== null) personalLink = `your Life Path ${lifePath}`;
             else personalLink = `your ${zodiacSign} traits`;

             interpretationHTML += `<li>The dominant <strong>${dominantColorName}</strong> energy in the reading also resonates with themes of ${getColorMeaning(dominantColorName)}, which may complement or challenge aspects of ${personalLink}.</li>`;
              personalConnectionsFound = true;
         }


         if (!personalConnectionsFound) {
              interpretationHTML += `<li>Based on the specific cards drawn, there are no strong immediate numerical or astrological correspondences that stand out in this reading, suggesting the message is more universally applicable or focused away from these particular energies right now.</li>`;
         }

         interpretationHTML += "</ul>";
    }


    // --- Integrating the Message ---
    interpretationHTML += "<h2>Synthesizing the Guidance</h2>";

    let synthesis = "<p>Bringing together the insights from the individual cards, their interactions, and the overall themes";

    // Add personal energy mention only if applicable and connections were found
    if (lifePath !== null || zodiacSign) {
        synthesis += `, alongside the influence of your inherent energies`;
         if (lifePath !== null && zodiacSign) {
            synthesis += ` (shaped by your Life Path ${lifePath} and ${zodiacSign} traits)`;
        } else if (lifePath !== null) {
            synthesis += ` (influenced by your Life Path ${lifePath})`;
        } else if (zodiacSign) {
            synthesis += ` (influenced by your ${zodiacSign} traits)`;
        }
         synthesis += personalConnectionsFound ? ", as explored above" : ""; // Only add this if connections were actually discussed
    }


    synthesis += `, this reading provides a multi-layered perspective on your question about <strong>${category}</strong>. It seems to highlight `;

    const keyThemes = [];
    const majorArcanaCount = typeCounts["Major Arcana"] || 0;
    const dominantSuitEntry = sortedTypes.length > 0 ? sortedTypes[0] : null; // Use sortedTypes
    const dominantSuit = dominantSuitEntry && dominantSuitEntry[0] !== 'Major Arcana' ? dominantSuitEntry[0] : null; // Get the actual suit name if it's the most frequent non-Major

    if (majorArcanaCount > reading.length / 3) keyThemes.push("significant life events and transformations");
    else if (majorArcanaCount === 0 && reading.length > 1) keyThemes.push("the practical, day-to-day aspects of the situation"); // If no Majors, focus on minor arcana themes

    if (dominantSuit) {
        let suitTheme = "";
         if (dominantSuit === "Cups") suitTheme = "the importance of emotions and relationships";
         else if (dominantSuit === "Pentacles") suitTheme = "focus on material stability and practical matters";
         else if (dominantSuit === "Swords") suitTheme = "challenges or clarity related to thoughts and communication";
         else if (dominantSuit === "Wands") suitTheme = "energy, action, and creative pursuits";
        keyThemes.push(`a strong emphasis on <strong>${dominantSuit}</strong> energies (${suitTheme})`);
    }

    // Added mention of numerical themes in synthesis if significant repeating ranks were found
    if (significantRanks.length > 0) {
         significantRanks.forEach(([rank, count], index) => {
              let rankMeaning = "";
               if (typeof rank === 'number') {
                    if (rank === 1) rankMeaning = "new beginnings"; else if (rank === 2) rankMeaning = "balance or choices"; else if (rank === 3) rankMeaning = "growth or collaboration"; else if (rank === 4) rankMeaning = "stability"; else if (rank === 5) rankMeaning = "change or conflict"; else if (rank === 6) rankMeaning = "harmony or adjustment"; else if (rank === 7) rankMeaning = "reflection or perseverance"; else if (rank === 8) rankMeaning = "action or mastery"; else if (rank === 9) rankMeaning = "culmination or fulfillment"; else if (rank === 10) rankMeaning = "completion";
               } else if (rank === 'Page') rankMeaning = "new opportunities"; else if (rank === 'Knight') rankMeaning = "action or movement"; else if (rank === 'Queen') rankMeaning = "nurturing or emotional mastery"; else if (rank === 'King') rankMeaning = "authority or leadership";
             if (rankMeaning) {
                 keyThemes.push(`themes of <strong>${rank}</strong> (${rankMeaning})`);
             }
         });
    }

    if (dominantColorName) {
         keyThemes.push(`the pervasive influence of <strong>${dominantColorName}</strong> energies (${getColorMeaning(dominantColorName)})`);
    }


    if (keyThemes.length > 0) {
        synthesis += keyThemes.join(", ") + ". ";
    } else {
        synthesis += "various facets of your current situation. ";
    }

     const reversedCount = reading.filter(item => item.isReversed).length;
     if (reversedCount > 0 && reading.length > 0) {
          const reversedPercentage = (reversedCount / reading.length) * 100;
          if (reversedPercentage >= 70) synthesis += "The high number of reversals emphasizes that significant internal work, overcoming obstacles, or shifting perspective is crucial now. ";
          else if (reversedPercentage >= 40) synthesis += "The presence of reversals suggests that internal blockages, external delays, or a need to re-evaluate your approach are significant factors. ";
          else synthesis += "A few reversals indicate subtle energies, minor hesitations, or areas requiring slight adjustment. ";
     } else if (reading.length > 0) {
         synthesis += "The absence of reversals suggests the energies are flowing clearly. ";
     }


    // Integrate found relationships into synthesis
    if (foundRelationships.length > 0) {
         synthesis += "The interactions between certain cards provide deeper insight. For example: ";
         foundRelationships.slice(0, 2).forEach((rel, index) => { // Mention 1-2 key relationships in synthesis
              const item1 = rel.cards[0];
              const item2 = rel.cards[1];
              let relationshipSnippet = "";
              if (rel.type === 'general') {
                   relationshipSnippet = `the pairing of <strong>${item1.card.name}</strong> and <strong>${item2.card.name}</strong> suggests ${rel.meaning}`;
              } else { // contextual
                  relationshipSnippet = `the dynamic between <strong>${item1.card.name}</strong> in the ${item1.position} position and <strong>${item2.card.name}</strong> in the ${item2.position} position highlights that ${rel.meaning}`;
              }
             synthesis += `${index > 0 ? 'Additionally, ' : ''}${relationshipSnippet}. `;
         });
         if (foundRelationships.length > 2) {
              synthesis += `See the "Interactions and Relationships" section above for more detailed card pairings. `;
         }
    }

     // Added mention of personal energy connections in synthesis (Refined)
     if (lifePath !== null || zodiacSign) {
         let personalSynthesis = "";
          if (lifePath !== null && zodiacSign) {
              personalSynthesis = `Considering your innate energies as a Life Path ${lifePath} and a ${zodiacSign}, this reading may be particularly illuminating aspects of your core purpose or how your natural traits are influencing or being influenced by the current situation.`;
         } else if (lifePath !== null) {
              personalSynthesis = `Reflecting on your Life Path ${lifePath}, consider how the themes in this reading relate to your core journey and lessons.`;
         } else if (zodiacSign) {
              personalSynthesis = `Given your ${zodiacSign} traits, consider how the energies in these cards align with or challenge your inherent nature.`;
         }
         if (personalConnectionsFound) { // Only add if we actually found specific connections to discuss
             synthesis += personalSynthesis + " ";
         }
    }


    synthesis += `</p><p>The combined message encourages you to reflect on how these individual insights, interconnected dynamics, and overarching energies relate to your question and your path forward. Trust your intuition as you integrate this guidance.</p>`;

    interpretationHTML += synthesis;

    // console.log("generateInterpretation finished. Returning HTML."); // LOG 20
    return interpretationHTML;
}


// Shuffle Animation (No changes needed here)
function animateShuffle(callback) {
    const shuffleDiv = document.getElementById('shuffleAnimation');
    shuffleDiv.style.display = 'block';
    shuffleDiv.innerHTML = '';

    // Create multiple card elements for visual effect
    for (let i = 0; i < 5; i++) {
        const card = document.createElement('div');
        card.className = 'shuffle-card';
        card.style.animation = `shuffle ${0.5 + i * 0.1}s ease-in-out ${i * 0.05}s infinite`;
        shuffleDiv.appendChild(card);
    }

    // End animation after 2 seconds
    setTimeout(() => {
        shuffleDiv.style.display = 'none';
        callback();
    }, 2000);
}

// Event Listeners (Minor tweak to modal logic)
let reading;
let question;
let spreadType;
let readerName; // Store name
let readerDob; // Store DOB
let lifePath = null; // Store calculated numerology
let zodiacSign = null; // Store calculated zodiac

document.getElementById('start').addEventListener('click', () => {
    spreadType = document.getElementById('spread').value;
    question = document.getElementById('question').value;
    readerName = document.getElementById('readerName').value.trim(); // Get name
    readerDob = document.getElementById('readerDob').value; // Get DOB
    const useReversals = document.getElementById('reversals').checked;
    const spread = spreads[spreadType];

    if (!spread) {
         alert("Please select a spread.");
         return;
    }

    // Calculate numerology and zodiac
    lifePath = calculateLifePath(readerDob);
    zodiacSign = getZodiacSign(readerDob);

    document.querySelector('.form').style.display = 'none';
    document.getElementById('reading').style.display = 'block';
    document.getElementById('interpretation').style.display = 'none'; // Hide old interpretation

    // Start shuffle animation
    animateShuffle(() => {
        const drawnCards = drawCards(deck, spread.positions.length, useReversals);
        reading = spread.positions.map((pos, index) => {
            // Ensure we don't go out of bounds if drawCards returned fewer than expected (shouldn't happen with correct logic, but defensive)
            const card = drawnCards[index];
            if (!card) return null; // Handle case where a card wasn't drawn for a position

            return {
                position: pos.name,
                card: card,
                isReversed: card.isReversed,
                meaning: card.isReversed ? card.reversedMeaning : card.uprightMeaning,
                // Store position description with the card for easier modal display
                positionDescription: pos.description
            };
        }).filter(item => item !== null); // Remove any null entries

        // Display personal info and question
        let personalInfoText = "";
        if (readerName) personalInfoText += `For ${readerName}`;
        if (lifePath !== null) personalInfoText += `${personalInfoText ? ', ' : ''}Life Path ${lifePath}`;
        if (zodiacSign) personalInfoText += `${personalInfoText ? ', ' : ''}${zodiacSign}`;

        if (readerName || lifePath !== null || zodiacSign) {
             document.getElementById('personalInfoDisplay').textContent = "Seeking guidance" + (personalInfoText ? `: ${personalInfoText}` : "");
        } else {
            document.getElementById('personalInfoDisplay').textContent = "General reading"; // Default if no info
        }


        document.getElementById('questionDisplay').textContent = question ? `Your focus: ${question}` : ""; // Keep question display empty if no question

        // Display cards with deal animation
        const cardsDiv = document.getElementById('cards');
        cardsDiv.innerHTML = '';
        reading.forEach((item, index) => {
            const flipContainer = document.createElement('div');
            flipContainer.className = 'flip-container';
            flipContainer.style.animationDelay = `${index * 0.2}s`;

            const flipper = document.createElement('div');
            flipper.className = 'flipper';

            const front = document.createElement('div');
            front.className = 'front';
            // The card back image is now a background-image on the .front div via CSS

            const back = document.createElement('div');
            back.className = 'back';
            // Set background color based on card color
            if (item.card.color) {
                 back.style.backgroundColor = item.card.color;
                 // Adjust text color for readability based on background color (simple example)
                 const hex = item.card.color.replace('#', '');
                 const r = parseInt(hex.substring(0, 2), 16);
                 const g = parseInt(hex.substring(2, 4), 16);
                 const b = parseInt(hex.substring(4, 6), 16);
                 const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
                 if (luminance > 0.5) {
                     back.style.color = '#000'; // Use black text for light colors
                 } else {
                     back.style.color = '#fff'; // Use white text for dark colors
                 }
            } else {
                 back.style.backgroundColor = '#fff'; // Default white
                 back.style.color = '#000'; // Default black text
            }


            // Add image element (will be hidden if onerror fires)
            const cardImage = document.createElement('img');
            cardImage.className = 'card-face-img';
            cardImage.src = `images/${item.card.name.replace(/\s+/g, '_').toLowerCase()}.jpg`;
            cardImage.alt = item.card.name;
            // If image fails to load, add 'show-fallback' class to the 'back' div
            cardImage.onerror = function() {
                this.style.display = 'none'; // Hide broken image icon
                this.parentElement.classList.add('show-fallback'); // Trigger fallback display
            };

             // Add fallback content structure
             const fallbackContent = document.createElement('div');
             fallbackContent.className = 'fallback-content';

             const suitSymbolTop = document.createElement('div');
             suitSymbolTop.className = 'suit-symbol suit-symbol-top';
             suitSymbolTop.innerHTML = item.card.isMajor ? '★' : (item.card.suitSymbol || ''); // Star for Major Arcana

             const cardRank = document.createElement('div');
             cardRank.className = 'card-rank';
             // Display rank or Major Arcana number/name
             if (item.card.isMajor) {
                  cardRank.textContent = item.card.rank; // Display Major Arcana number
             } else {
                 cardRank.textContent = typeof item.card.rank === 'number' ? item.card.rank : (item.card.rank ? item.card.rank.substring(0,1) : ''); // Display number or first letter of rank
             }


             const cardNameElem = document.createElement('div');
             cardNameElem.className = 'card-name';
             cardNameElem.textContent = item.card.name; // Card Name

             const suitSymbolBottom = document.createElement('div');
             suitSymbolBottom.className = 'suit-symbol suit-symbol-bottom';
             suitSymbolBottom.innerHTML = item.card.isMajor ? '★' : (item.card.suitSymbol || ''); // Star for Major Arcana
//


             fallbackContent.appendChild(suitSymbolTop);
             fallbackContent.appendChild(cardRank);
             fallbackContent.appendChild(cardNameElem); // Add card name to fallback
             fallbackContent.appendChild(suitSymbolBottom);

             back.appendChild(cardImage); // Add image element
             back.appendChild(fallbackContent); // Add fallback structure

            flipper.appendChild(front);
            flipper.appendChild(back);
            flipContainer.appendChild(flipper);

            // Flip and modal trigger
            flipContainer.addEventListener('click', () => {
                flipContainer.classList.add('flipped');
                // Show modal with card details
                const modal = document.getElementById('cardModal');
                const modalCardDiv = document.getElementById('modalCard');
                const modalCardImage = document.getElementById('modalCardImage');
                const modalCardName = document.getElementById('modalCardName');
                // Removed modalCardColor as we set background color instead
                const modalCardDescription = document.getElementById('modalCardDescription');
                const modalCardMeaning = document.getElementById('modalCardMeaning');
                const modalCardContext = document.getElementById('modalCardContext');
                const modalPositionName = document.getElementById('modalPositionName'); // Added element for position name

                // Update modal card image/fallback
                modalCardImage.src = `images/${item.card.name.replace(/\s+/g, '_').toLowerCase()}.jpg`;
                // Reset fallback visibility before checking image loading
                 modalCardDiv.classList.remove('show-fallback');
                 modalCardImage.style.display = 'block'; // Ensure image is initially visible

                 // Update modal fallback content if image fails (or if no image should exist)
                 const modalFallbackContent = modalCardDiv.querySelector('.fallback-content');
                 const modalSuitTop = modalFallbackContent.querySelector('.suit-symbol-top');
                 const modalRank = modalFallbackContent.querySelector('.card-rank');
                 const modalName = modalFallbackContent.querySelector('.card-name');
                 const modalSuitBottom = modalFallbackContent.querySelector('.suit-symbol-bottom');

                 modalSuitTop.innerHTML = item.card.isMajor ? '★' : (item.card.suitSymbol || '');
                 if (item.card.isMajor) {
                     modalRank.textContent = item.card.rank;
                 } else {
                     modalRank.textContent = typeof item.card.rank === 'number' ? item.card.rank : (item.card.rank ? item.card.rank.substring(0,1) : '');
                 }
                 modalName.textContent = item.card.name;
                 modalSuitBottom.innerHTML = item.card.isMajor ? '★' : (item.card.suitSymbol || '');

                // Update modal card background color and text color
                if (item.card.color) {
                    modalCardDiv.style.backgroundColor = item.card.color;
                    const hex = item.card.color.replace('#', '');
                    const r = parseInt(hex.substring(0, 2), 16);
                    const g = parseInt(hex.substring(2, 4), 16);
                    const b = parseInt(hex.substring(4, 6), 16);
                    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
                    modalCardDiv.style.color = luminance > 0.5 ? '#000' : '#fff'; // Black or white text
                     // Also set fallback text color
                    modalFallbackContent.style.color = luminance > 0.5 ? '#000' : '#fff';
                } else {
                    modalCardDiv.style.backgroundColor = '#fff';
                    modalCardDiv.style.color = '#000';
                     modalFallbackContent.style.color = '#000';
                }

                // Display Card Name + Orientation
                modalCardName.textContent = `${item.card.name} (${item.isReversed ? 'Reversed' : 'Upright'})`;

                // Display Position Name and Description
                 modalPositionName.textContent = `Position: ${item.position} (${item.positionDescription})`;

                // Display General Description from the card data
                modalCardDescription.textContent = `Description: ${item.card.description}`;

                // Display the specific meaning for the drawn orientation
                modalCardMeaning.textContent = `Meaning (This Orientation): ${item.meaning}`;

                // Refined Contextual Meaning display for the modal - This is already captured by showing
                // the position and the meaning specific to the orientation drawn in that position.
                // We can add a synthesized sentence here if desired, but the current structure is clear.
                // Let's make this section slightly more explicit about how the position shapes the meaning.
                modalCardContext.textContent = `How this applies in the ${item.position} position (${item.positionDescription}): This card's energy of "${item.meaning}" is influencing the aspect of your reading related to ${item.positionDescription}.`;


                modal.style.display = 'flex';
            }, { once: true }); // Use once: true so it only flips the first click

            cardsDiv.appendChild(flipContainer);

            // Trigger deal animation
            setTimeout(() => {
                flipContainer.classList.add('deal');
            }, index * 200);
        });
    });
});

// Modal Close (No changes needed here)
document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('cardModal').style.display = 'none';
});

// Full Interpretation (No changes needed here - just calls the enhanced function)
document.getElementById('interpret').addEventListener('click', () => {
    // Pass personal info to interpretation generation
    // The function now returns HTML
    const interpretationHTML = generateInterpretation(reading, readerName, question, spreadType, lifePath, zodiacSign);
    // Use innerHTML to render the HTML
    document.getElementById('interpretation').innerHTML = interpretationHTML;
    document.getElementById('interpretation').style.display = 'block';
});

// New Reading (No changes needed here)
document.getElementById('newReading').addEventListener('click', () => {
    document.querySelector('.form').style.display = 'block';
    document.getElementById('reading').style.display = 'none';
    document.getElementById('interpretation').style.display = 'none';
    document.getElementById('cards').innerHTML = ''; // Clear previous cards
    document.getElementById('question').value = '';
    document.getElementById('readerName').value = ''; // Clear name
    document.getElementById('readerDob').value = ''; // Clear DOB
    document.getElementById('reversals').checked = true;
    document.getElementById('personalInfoDisplay').textContent = ""; // Clear personal info display
     document.getElementById('questionDisplay').textContent = ""; // Clear question display
    lifePath = null; // Reset
    zodiacSign = null; // Reset
     reading = null; // Clear previous reading data
     spreadType = null; // Clear previous spread type
});
