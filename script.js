// Full Tarot Deck (78 cards)
const deck = [
    // Major Arcana (22 cards)
    { name: "The Fool", isMajor: true, uprightMeaning: "New beginnings, spontaneity, taking a leap of faith", reversedMeaning: "Recklessness, being taken advantage of, inconsideration", description: "A carefree wanderer with a dog, symbolizing innocence and adventure." },
    { name: "The Magician", isMajor: true, uprightMeaning: "Manifestation, resourcefulness, power", reversedMeaning: "Manipulation, poor planning, untapped talents", description: "A figure channeling divine energy with tools of all suits." },
    { name: "The High Priestess", isMajor: true, uprightMeaning: "Intuition, mystery, subconscious mind", reversedMeaning: "Secrets, disconnected from intuition, withdrawal", description: "A veiled priestess between pillars, guarding esoteric knowledge." },
    { name: "The Empress", isMajor: true, uprightMeaning: "Fertility, nurturing, abundance", reversedMeaning: "Dependence, smothering, emptiness", description: "A maternal figure in a lush garden, embodying creation." },
    { name: "The Emperor", isMajor: true, uprightMeaning: "Authority, structure, control", reversedMeaning: "Tyranny, rigidity, coldness", description: "A stern ruler on a throne, symbolizing order and discipline." },
    { name: "The Hierophant", isMajor: true, uprightMeaning: "Tradition, conformity, morality", reversedMeaning: "Rebellion, subversiveness, new approaches", description: "A religious leader blessing disciples, representing tradition." },
    { name: "The Lovers", isMajor: true, uprightMeaning: "Love, harmony, relationships", reversedMeaning: "Disharmony, imbalance, misalignment of values", description: "A couple under an angel, signifying union and choice." },
    { name: "The Chariot", isMajor: true, uprightMeaning: "Willpower, determination, victory", reversedMeaning: "Lack of direction, lack of control, aggression", description: "A warrior in a chariot, driven by opposing forces." },
    { name: "Strength", isMajor: true, uprightMeaning: "Courage, inner strength, self-confidence", reversedMeaning: "Weakness, self-doubt, inadequacy", description: "A woman taming a lion, embodying gentle power." },
    { name: "The Hermit", isMajor: true, uprightMeaning: "Introspection, solitude, guidance", reversedMeaning: "Isolation, loneliness, withdrawal", description: "A cloaked figure with a lantern, seeking inner truth." },
    { name: "Wheel of Fortune", isMajor: true, uprightMeaning: "Cycles, change, destiny", reversedMeaning: "Bad luck, lack of control, clinging to control", description: "A wheel with mystical symbols, turning fate." },
    { name: "Justice", isMajor: true, uprightMeaning: "Fairness, truth, law", reversedMeaning: "Injustice, dishonesty, unaccountability", description: "A seated figure with scales and sword, judging impartially." },
    { name: "The Hanged Man", isMajor: true, uprightMeaning: "Surrender, letting go, new perspectives", reversedMeaning: "Stalling, indecision, avoidance", description: "A man suspended upside-down, embracing sacrifice." },
    { name: "Death", isMajor: true, uprightMeaning: "Transformation, endings, change", reversedMeaning: "Fear of change, stagnation, decay", description: "A skeletal rider, heralding inevitable transformation." },
    { name: "Temperance", isMajor: true, uprightMeaning: "Balance, moderation, patience", reversedMeaning: "Imbalance, excess, lack of harmony", description: "An angel mixing waters, symbolizing harmony." },
    { name: "The Devil", isMajor: true, uprightMeaning: "Materialism, bondage, addiction", reversedMeaning: "Freedom, release, reclaiming power", description: "A horned figure with chained figures, representing temptation." },
    { name: "The Tower", isMajor: true, uprightMeaning: "Sudden change, upheaval, chaos", reversedMeaning: "Fear of change, avoiding disaster, prolonging suffering", description: "A tower struck by lightning, symbolizing destruction." },
    { name: "The Star", isMajor: true, uprightMeaning: "Hope, inspiration, serenity", reversedMeaning: "Lack of faith, despair, disconnection", description: "A woman pouring water under stars, offering hope." },
    { name: "The Moon", isMajor: true, uprightMeaning: "Illusion, intuition, unconscious", reversedMeaning: "Confusion, fear, misinterpretation", description: "A moonlit path with howling dogs, evoking mystery." },
    { name: "The Sun", isMajor: true, uprightMeaning: "Joy, success, celebration", reversedMeaning: "Temporary depression, lack of success, negativity", description: "A child on a horse under a bright sun, radiating joy." },
    { name: "Judgement", isMajor: true, uprightMeaning: "Reflection, reckoning, awakening", reversedMeaning: "Self-doubt, lack of self-awareness, refusal to change", description: "Angels sounding trumpets, calling souls to rise." },
    { name: "The World", isMajor: true, uprightMeaning: "Completion, accomplishment, travel", reversedMeaning: "Incompletion, lack of closure, failure to achieve", description: "A dancer encircled by a wreath, signifying fulfillment." },

    // Minor Arcana: Cups (14 cards)
    { name: "Ace of Cups", suit: "Cups", isMajor: false, uprightMeaning: "Love, new relationships, compassion", reversedMeaning: "Self-love, repressed emotions, blocked creativity", description: "A chalice overflowing with water, symbolizing emotional abundance." },
    { name: "Two of Cups", suit: "Cups", isMajor: false, uprightMeaning: "Partnership, unity, connection", reversedMeaning: "Disharmony, imbalance, broken communication", description: "Two figures exchanging cups, representing mutual love." },
    { name: "Three of Cups", suit: "Cups", isMajor: false, uprightMeaning: "Celebration, friendship, community", reversedMeaning: "Overindulgence, gossip, isolation", description: "Three women dancing, celebrating togetherness." },
    { name: "Four of Cups", suit: "Cups", isMajor: false, uprightMeaning: "Apathy, contemplation, disconnection", reversedMeaning: "Sudden awareness, acceptance, moving on", description: "A figure ignoring offered cups, lost in thought." },
    { name: "Five of Cups", suit: "Cups", isMajor: false, uprightMeaning: "Loss, grief, disappointment", reversedMeaning: "Acceptance, moving on, forgiveness", description: "A cloaked figure mourning spilled cups, missing others." },
    { name: "Six of Cups", suit: "Cups", isMajor: false, uprightMeaning: "Nostalgia, childhood memories, innocence", reversedMeaning: "Stuck in the past, naivety, unrealistic expectations", description: "Children exchanging cups, evoking memories." },
    { name: "Seven of Cups", suit: "Cups", isMajor: false, uprightMeaning: "Choices, fantasy, illusion", reversedMeaning: "Reality check, clarity, decision-making", description: "A figure facing mystical cups, each offering dreams." },
    { name: "Eight of Cups", suit: "Cups", isMajor: false, uprightMeaning: "Abandonment, withdrawal, searching for deeper meaning", reversedMeaning: "Avoidance, fear of change, stagnation", description: "A figure leaving cups behind, seeking purpose." },
    { name: "Nine of Cups", suit: "Cups", isMajor: false, uprightMeaning: "Contentment, satisfaction, gratitude", reversedMeaning: "Dissatisfaction, greed, smugness", description: "A smug figure with cups, known as the 'wish card'." },
    { name: "Ten of Cups", suit: "Cups", isMajor: false, uprightMeaning: "Harmony, happiness, family", reversedMeaning: "Broken relationships, disconnection, lack of harmony", description: "A family under a rainbow, symbolizing bliss." },
    { name: "Page of Cups", suit: "Cups", isMajor: false, uprightMeaning: "Creativity, intuition, new opportunities", reversedMeaning: "Emotional immaturity, creative blocks, ignoring intuition", description: "A youthful figure with a cup, bearing messages." },
    { name: "Knight of Cups", suit: "Cups", isMajor: false, uprightMeaning: "Romance, charm, imagination", reversedMeaning: "Moodiness, jealousy, unrealistic expectations", description: "A knight offering a cup, driven by emotion." },
    { name: "Queen of Cups", suit: "Cups", isMajor: false, uprightMeaning: "Compassion, calm, emotional security", reversedMeaning: "Emotional manipulation, moodiness, insecurity", description: "A serene queen with a cup, embodying empathy." },
    { name: "King of Cups", suit: "Cups", isMajor: false, uprightMeaning: "Emotional balance, diplomacy, generosity", reversedMeaning: "Emotional manipulation, volatility, dishonesty", description: "A king mastering emotions, offering wisdom." },

    // Minor Arcana: Pentacles (14 cards)
    { name: "Ace of Pentacles", suit: "Pentacles", isMajor: false, uprightMeaning: "New financial opportunities, prosperity, manifestation", reversedMeaning: "Lost opportunities, lack of planning, financial delays", description: "A hand offering a coin, symbolizing wealth." },
    { name: "Two of Pentacles", suit: "Pentacles", isMajor: false, uprightMeaning: "Balance, adaptability, time management", reversedMeaning: "Disorganization, financial disarray, overcommitment", description: "A juggler balancing coins, managing resources." },
    { name: "Three of Pentacles", suit: "Pentacles", isMajor: false, uprightMeaning: "Teamwork, collaboration, building", reversedMeaning: "Lack of teamwork, disorganization, group conflict", description: "Artisans working together, valuing skill." },
    { name: "Four of Pentacles", suit: "Pentacles", isMajor: false, uprightMeaning: "Security, control, conservatism", reversedMeaning: "Greed, materialism, hoarding", description: "A figure clutching coins, guarding wealth." },
    { name: "Five of Pentacles", suit: "Pentacles", isMajor: false, uprightMeaning: "Financial loss, poverty, isolation", reversedMeaning: "Recovery, charity, improvement", description: "Beggars outside a church, feeling abandoned." },
    { name: "Six of Pentacles", suit: "Pentacles", isMajor: false, uprightMeaning: "Generosity, charity, sharing", reversedMeaning: "Debt, selfishness, one-sided charity", description: "A figure giving coins, balancing giving and receiving." },
    { name: "Seven of Pentacles", suit: "Pentacles", isMajor: false, uprightMeaning: "Patience, investment, sustainable results", reversedMeaning: "Lack of long-term vision, limited success, impatience", description: "A farmer assessing crops, reflecting on effort." },
    { name: "Eight of Pentacles", suit: "Pentacles", isMajor: false, uprightMeaning: "Apprenticeship, mastery, skill development", reversedMeaning: "Perfectionism, lack of ambition, mediocrity", description: "A craftsman carving pentacles, honing skills." },
    { name: "Nine of Pentacles", suit: "Pentacles", isMajor: false, uprightMeaning: "Abundance, luxury, self-sufficiency", reversedMeaning: "Financial setbacks, over-investment, living beyond means", description: "A lady in a garden, enjoying prosperity." },
    { name: "Ten of Pentacles", suit: "Pentacles", isMajor: false, uprightMeaning: "Wealth, inheritance, family", reversedMeaning: "Financial failure, loneliness, loss", description: "A family with wealth, symbolizing legacy." },
    { name: "Page of Pentacles", suit: "Pentacles", isMajor: false, uprightMeaning: "Manifestation, financial opportunity, skill development", reversedMeaning: "Lack of progress, procrastination, learning from failure", description: "A youth studying a coin, eager to learn." },
    { name: "Knight of Pentacles", suit: "Pentacles", isMajor: false, uprightMeaning: "Efficiency, routine, conservatism", reversedMeaning: "Laziness, boredom, feeling stuck", description: "A knight with a coin, methodical and steady." },
    { name: "Queen of Pentacles", suit: "Pentacles", isMajor: false, uprightMeaning: "Nurturing, practical, financial security", reversedMeaning: "Imbalance in work/family, financial dependence, smothering", description: "A queen with a coin, grounded and caring." },
    { name: "King of Pentacles", suit: "Pentacles", isMajor: false, uprightMeaning: "Wealth, business, leadership", reversedMeaning: "Financially inept, obsession with wealth, stubbornness", description: "A king with a coin, master of prosperity." },

    // Minor Arcana: Swords (14 cards)
    { name: "Ace of Swords", suit: "Swords", isMajor: false, uprightMeaning: "Clarity, breakthrough, new ideas", reversedMeaning: "Confusion, miscommunication, hostility", description: "A sword piercing a crown, symbolizing mental clarity." },
    { name: "Two of Swords", suit: "Swords", isMajor: false, uprightMeaning: "Indecision, stalemate, difficult choices", reversedMeaning: "Lesser of two evils, no right choice, confusion", description: "A blindfolded figure with crossed swords, undecided." },
    { name: "Three of Swords", suit: "Swords", isMajor: false, uprightMeaning: "Heartbreak, sorrow, grief", reversedMeaning: "Recovery, forgiveness, moving on", description: "A heart pierced by swords, symbolizing pain." },
    { name: "Four of Swords", suit: "Swords", isMajor: false, uprightMeaning: "Rest, recuperation, contemplation", reversedMeaning: "Restlessness, burnout, stress", description: "A knight in repose, seeking peace." },
    { name: "Five of Swords", suit: "Swords", isMajor: false, uprightMeaning: "Conflict, tension, defeat", reversedMeaning: "Reconciliation, making amends, past resentment", description: "A victor with swords, others defeated." },
    { name: "Six of Swords", suit: "Swords", isMajor: false, uprightMeaning: "Transition, moving on, travel", reversedMeaning: "Emotional baggage, unresolved issues, resistance to change", description: "A boat carrying figures, leaving troubled waters." },
    { name: "Seven of Swords", suit: "Swords", isMajor: false, uprightMeaning: "Deception, trickery, strategy", reversedMeaning: "Coming clean, rethinking approach, being caught", description: "A figure stealing swords, acting covertly." },
    { name: "Eight of Swords", suit: "Swords", isMajor: false, uprightMeaning: "Imprisonment, restriction, powerlessness", reversedMeaning: "Self-liberation, new perspective, freedom", description: "A bound figure surrounded by swords, feeling trapped." },
    { name: "Nine of Swords", suit: "Swords", isMajor: false, uprightMeaning: "Anxiety, worry, nightmares", reversedMeaning: "Hope, reaching out for help, improving circumstances", description: "A figure awake, tormented by fears." },
    { name: "Ten of Swords", suit: "Swords", isMajor: false, uprightMeaning: "Betrayal, loss, ending", reversedMeaning: "Recovery, regeneration, fear of ruin", description: "A figure pierced by swords, symbolizing finality." },
    { name: "Page of Swords", suit: "Swords", isMajor: false, uprightMeaning: "Curiosity, restlessness, mental energy", reversedMeaning: "Hasty decisions, all talk no action, manipulation", description: "A youth with a sword, eager for knowledge." },
    { name: "Knight of Swords", suit: "Swords", isMajor: false, uprightMeaning: "Action, ambition, determination", reversedMeaning: "Impulsiveness, recklessness, burnout", description: "A knight charging with a sword, driven by intellect." },
    { name: "Queen of Swords", suit: "Swords", isMajor: false, uprightMeaning: "Independence, clear boundaries, direct communication", reversedMeaning: "Cold-hearted, cruel, bitterness", description: "A queen with a sword, sharp and discerning." },
    { name: "King of Swords", suit: "Swords", isMajor: false, uprightMeaning: "Intellect, authority, truth", reversedMeaning: "Manipulative, tyrannical, abusive", description: "A king with a sword, embodying logic." },

    // Minor Arcana: Wands (14 cards)
    { name: "Ace of Wands", suit: "Wands", isMajor: false, uprightMeaning: "Inspiration, new opportunities, growth", reversedMeaning: "Delays, lack of direction, distractions", description: "A hand grasping a wand, sparking creativity." },
    { name: "Two of Wands", suit: "Wands", isMajor: false, uprightMeaning: "Planning, progress, decisions", reversedMeaning: "Fear of change, lack of planning, restriction", description: "A figure with a globe, contemplating expansion." },
    { name: "Three of Wands", suit: "Wands", isMajor: false, uprightMeaning: "Expansion, foresight, overseas opportunities", reversedMeaning: "Playing small, lack of foresight, unexpected delays", description: "A figure overlooking ships, awaiting results." },
    { name: "Four of Wands", suit: "Wands", isMajor: false, uprightMeaning: "Celebration, harmony, homecoming", reversedMeaning: "Lack of support, transience, home conflicts", description: "A joyful gathering under garlands, celebrating." },
    { name: "Five of Wands", suit: "Wands", isMajor: false, uprightMeaning: "Conflict, competition, disagreement", reversedMeaning: "Avoiding conflict, focusing on cooperation, resolution", description: "Figures clashing with wands, in strife." },
    { name: "Six of Wands", suit: "Wands", isMajor: false, uprightMeaning: "Victory, recognition, progress", reversedMeaning: "Egotism, disrepute, lack of recognition", description: "A rider crowned with laurels, celebrated." },
    { name: "Seven of Wands", suit: "Wands", isMajor: false, uprightMeaning: "Perseverance, defense, maintaining control", reversedMeaning: "Giving up, overwhelmed, timidity", description: "A figure defending with a wand, standing firm." },
    { name: "Eight of Wands", suit: "Wands", isMajor: false, uprightMeaning: "Speed, action, air travel", reversedMeaning: "Delays, frustration, holding off", description: "Wands flying swiftly, indicating momentum." },
    { name: "Nine of Wands", suit: "Wands", isMajor: false, uprightMeaning: "Resilience, persistence, test of faith", reversedMeaning: "Defensiveness, paranoia, exhaustion", description: "A weary figure with wands, guarding." },
    { name: "Ten of Wands", suit: "Wands", isMajor: false, uprightMeaning: "Burden, responsibility, hard work", reversedMeaning: "Doing it all, delegation, release", description: "A figure carrying heavy wands, overburdened." },
    { name: "Page of Wands", suit: "Wands", isMajor: false, uprightMeaning: "Exploration, excitement, freedom", reversedMeaning: "Lack of direction, procrastination, creating conflict", description: "A youth with a wand, eager for adventure." },
    { name: "Knight of Wands", suit: "Wands", isMajor: false, uprightMeaning: "Energy, passion, adventure", reversedMeaning: "Haste, scattered energy, delays", description: "A knight charging with a wand, full of zeal." },
    { name: "Queen of Wands", suit: "Wands", isMajor: false, uprightMeaning: "Courage, confidence, independence", reversedMeaning: "Selfishness, jealousy, demanding", description: "A queen with a wand, vibrant and bold." },
    { name: "King of Wands", suit: "Wands", isMajor: false, uprightMeaning: "Leadership, vision, entrepreneurship", reversedMeaning: "Impulsiveness, overbearing, unachievable expectations", description: "A king with a wand, a natural leader." }
];

// Spread Definitions (including niche spreads)
const spreads = {
    oneCard: {
        name: "One-Card Spread",
        positions: [{ name: "Insight", description: "A single point of guidance or focus" }],
    },
    threeCard: {
        name: "Three-Card Spread",
        positions: [
            { name: "Past", description: "Influences from the past" },
            { name: "Present", description: "The current situation" },
            { name: "Future", description: "Potential outcome" },
        ],
    },
    celticCross: {
        name: "Celtic Cross Spread",
        positions: [
            { name: "Present", description: "Current situation" },
            { name: "Challenge", description: "Immediate obstacle" },
            { name: "Past", description: "Past influences" },
            { name: "Future", description: "Near future" },
            { name: "Above", description: "Goal or best outcome" },
            { name: "Below", description: "Subconscious influences" },
            { name: "Advice", description: "Recommended action" },
            { name: "External Influences", description: "Outside factors" },
            { name: "Hopes and Fears", description: "Inner emotions" },
            { name: "Outcome", description: "Likely result" },
        ],
    },
    horseshoe: {
        name: "Horseshoe Spread",
        positions: [
            { name: "Past", description: "Influences from the past" },
            { name: "Present", description: "The current situation" },
            { name: "Hidden Influences", description: "Unseen factors at play" },
            { name: "Obstacles", description: "Challenges to overcome" },
            { name: "External Influences", description: "Outside forces" },
            { name: "Advice", description: "Recommended action" },
            { name: "Outcome", description: "Likely result" },
        ],
    },
    astrological: {
        name: "Astrological Spread",
        positions: [
            { name: "1st House", description: "Self, identity, appearance" },
            { name: "2nd House", description: "Finances, possessions, values" },
            { name: "3rd House", description: "Communication, siblings, short trips" },
            { name: "4th House", description: "Home, family, roots" },
            { name: "5th House", description: "Creativity, romance, children" },
            { name: "6th House", description: "Health, work, service" },
            { name: "7th House", description: "Partnerships, marriage, contracts" },
            { name: "8th House", description: "Transformation, shared resources, intimacy" },
            { name: "9th House", description: "Philosophy, travel, higher learning" },
            { name: "10th House", description: "Career, reputation, public life" },
            { name: "11th House", description: "Friendships, groups, aspirations" },
            { name: "12th House", description: "Subconscious, secrets, spirituality" },
        ],
    },
    treeOfLife: {
        name: "Tree of Life Spread",
        positions: [
            { name: "Kether", description: "Crown - Spiritual purpose" },
            { name: "Chokmah", description: "Wisdom - Creative energy" },
            { name: "Binah", description: "Understanding - Intuition" },
            { name: "Chesed", description: "Mercy - Abundance" },
            { name: "Geburah", description: "Severity - Discipline" },
            { name: "Tiphareth", description: "Beauty - Balance" },
            { name: "Netzach", description: "Victory - Emotions" },
            { name: "Hod", description: "Splendor - Intellect" },
            { name: "Yesod", description: "Foundation - Subconscious" },
            { name: "Malkuth", description: "Kingdom - Physical reality" },
        ],
    },
    chakra: {
        name: "Chakra Spread",
        positions: [
            { name: "Root Chakra", description: "Stability, security" },
            { name: "Sacral Chakra", description: "Creativity, passion" },
            { name: "Solar Plexus Chakra", description: "Personal power" },
            { name: "Heart Chakra", description: "Love, compassion" },
            { name: "Throat Chakra", description: "Communication" },
            { name: "Third Eye Chakra", description: "Intuition" },
            { name: "Crown Chakra", description: "Spiritual connection" },
        ],
    },
};

// Predefined Card Relationship Meanings
const cardRelationships = [
    { cards: ["The Tower", "The Star"], meaning: "A period of upheaval or crisis (The Tower) is followed by hope and healing (The Star), suggesting recovery after disruption." },
    { cards: ["The Lovers", "Three of Swords"], meaning: "A relationship or choice (The Lovers) may be facing heartbreak or betrayal (Three of Swords), urging honest communication." },
    { cards: ["The Emperor", "The Empress"], meaning: "Structure and authority (The Emperor) complement nurturing and abundance (The Empress), indicating a balanced partnership or leadership." },
    { cards: ["Death", "The Sun"], meaning: "Transformation or endings (Death) lead to joy and vitality (The Sun), signaling a positive rebirth." },
    { cards: ["The Devil", "The Hermit"], meaning: "Materialism or entrapment (The Devil) is countered by introspection and solitude (The Hermit), suggesting a need to break free through self-reflection." },
    { cards: ["Ace of Cups", "Ten of Pentacles"], meaning: "New emotional beginnings (Ace of Cups) align with long-term stability and family (Ten of Pentacles), indicating a fulfilling connection." },
    { cards: ["The Moon", "The High Priestess"], meaning: "Illusion and confusion (The Moon) are clarified by deep intuition (The High Priestess), urging trust in your inner wisdom." },
];

// Fisher-Yates Shuffle Algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Draw Cards from the Deck
function drawCards(deck, num, useReversals) {
    const shuffled = shuffle([...deck]);
    return shuffled.slice(0, num).map(card => ({
        ...card,
        isReversed: useReversals ? Math.random() < 0.5 : false
    }));
}

// Categorize the Question
function categorizeQuestion(question) {
    const qLower = question.toLowerCase();
    if (/love|relationship|partner/i.test(qLower)) return "love";
    if (/career|job|work/i.test(qLower)) return "career";
    if (/health|body|energy/i.test(qLower)) return "health";
    if (/spiritual|growth|self/i.test(qLower)) return "spirituality";
    return "general";
}

// Generate Interpretation
function generateInterpretation(reading, question, spreadType) {
    let interpretation = "";
    const category = categorizeQuestion(question);
    const spread = spreads[spreadType];

    // Introduction
    interpretation += question
        ? `Regarding your question about ${category}, the ${spread.name} reveals:\n\n`
        : `The ${spread.name} offers a general insight:\n\n`;

    // Individual Card Interpretations
    interpretation += "**Card Interpretations**:\n";
    reading.forEach(item => {
        const posDesc = spread.positions.find(p => p.name === item.position).description;
        const contextPrefix = item.position.toLowerCase().includes("advice")
            ? "Consider taking this action: "
            : item.position.toLowerCase().includes("outcome")
            ? "This suggests a potential outcome: "
            : item.position.toLowerCase().includes("future")
            ? "Looking ahead, this indicates: "
            : `In the context of ${item.position.toLowerCase()}, `;
        interpretation += `- **${item.position}** (${posDesc}): ${item.card.name} (${item.isReversed ? 'reversed' : 'upright'}) - ${contextPrefix}${item.meaning}\n`;
    });

    // Deeper Insights
    interpretation += "\n**Deeper Insights**:\n";
    const drawnNames = reading.map(item => item.card.name);
    cardRelationships.forEach(rel => {
        if (rel.cards.every(card => drawnNames.includes(card))) {
            interpretation += `- **${rel.cards.join(" and ")}**: ${rel.meaning}\n`;
        }
    });

    // Suit and Major Arcana Analysis
    const suits = reading.reduce((acc, item) => {
        const suit = item.card.suit || "Major";
        acc[suit] = (acc[suit] || 0) + 1;
        return acc;
    }, {});
    const dominantSuit = Object.entries(suits).sort((a, b) => b[1] - a[1])[0];
    if (dominantSuit[1] > reading.length / 2 && dominantSuit[0] !== "Major") {
        const suitMeanings = {
            Cups: "emotions, relationships, and intuition",
            Pentacles: "material matters, work, and stability",
            Swords: "thoughts, conflicts, and intellect",
            Wands: "energy, creativity, and action"
        };
        interpretation += `- Dominance of ${dominantSuit[0]} (${dominantSuit[1]} cards) highlights ${suitMeanings[dominantSuit[0]]}.\n`;
    }
    const majorCount = reading.filter(item => item.card.isMajor).length;
    if (majorCount > reading.length / 2) {
        interpretation += `- Many Major Arcana cards (${majorCount}) suggest significant life events or transformative lessons.\n`;
    }
    const reversedCount = reading.filter(item => item.isReversed).length;
    if (reversedCount > reading.length / 2) {
        interpretation += `- Multiple reversed cards (${reversedCount}) indicate blockages or a need for introspection.\n`;
    }

    // Summary
    interpretation += "\n**Summary**: The cards weave a narrative unique to your path. Trust your intuition as you interpret their guidance.";

    return interpretation;
}

// Shuffle Animation
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

// Event Listeners
let reading;
let question;
let spreadType;

document.getElementById('start').addEventListener('click', () => {
    spreadType = document.getElementById('spread').value;
    question = document.getElementById('question').value;
    const useReversals = document.getElementById('reversals').checked;
    const spread = spreads[spreadType];

    document.querySelector('.form').style.display = 'none';
    document.getElementById('reading').style.display = 'block';

    // Start shuffle animation
    animateShuffle(() => {
        const drawnCards = drawCards(deck, spread.positions.length, useReversals);
        reading = spread.positions.map((pos, index) => ({
            position: pos.name,
            card: drawnCards[index],
            isReversed: drawnCards[index].isReversed,
            meaning: drawnCards[index].isReversed ? drawnCards[index].reversedMeaning : drawnCards[index].uprightMeaning
        }));

        // Display question
        document.getElementById('questionDisplay').textContent = question ? `Your question: ${question}` : "General reading";

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
            front.innerHTML = `<img src="images/card_back.jpg" alt="Card Back" onerror="this.src='https://via.placeholder.com/150x250?text=Card+Back';">`;

            const back = document.createElement('div');
            back.className = 'back';
            back.innerHTML = `
                <h3>${item.position}</h3>
                <img src="images/${item.card.name.replace(/\s+/g, '_').toLowerCase()}.jpg" alt="${item.card.name}" onerror="this.style.display='none';">
                <p>${item.card.name} (${item.isReversed ? 'reversed' : 'upright'})</p>
                <p>${item.meaning}</p>
            `;

            flipper.appendChild(front);
            flipper.appendChild(back);
            flipContainer.appendChild(flipper);

            // Flip and modal trigger
            flipContainer.addEventListener('click', () => {
                flipContainer.classList.add('flipped');
                // Show modal with card details
                const modal = document.getElementById('cardModal');
                const modalCard = document.getElementById('modalCard');
                const modalCardName = document.getElementById('modalCardName');
                const modalCardDescription = document.getElementById('modalCardDescription');
                const modalCardMeaning = document.getElementById('modalCardMeaning');
                const modalCardContext = document.getElementById('modalCardContext');

                modalCard.innerHTML = `<img src="images/${item.card.name.replace(/\s+/g, '_').toLowerCase()}.jpg" alt="${item.card.name}" onerror="this.style.display='none';">`;
                modalCardName.textContent = `${item.card.name} (${item.isReversed ? 'Reversed' : 'Upright'})`;
                modalCardDescription.textContent = `Description: ${item.card.description}`;
                modalCardMeaning.textContent = `General Meaning: ${item.meaning}`;
                const posDesc = spread.positions.find(p => p.name === item.position).description;
                const contextPrefix = item.position.toLowerCase().includes("advice")
                    ? "This advises you to: "
                    : item.position.toLowerCase().includes("outcome")
                    ? "This suggests as an outcome: "
                    : item.position.toLowerCase().includes("future")
                    ? "Looking ahead, this indicates: "
                    : `Within the ${item.position.toLowerCase()} (${posDesc}), this means: `;
                modalCardContext.textContent = `Contextual Meaning: ${contextPrefix}${item.meaning}`;

                modal.style.display = 'flex';
            }, { once: true });

            cardsDiv.appendChild(flipContainer);

            // Trigger deal animation
            setTimeout(() => {
                flipContainer.classList.add('deal');
            }, index * 200);
        });
    });
});

// Modal Close
document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('cardModal').style.display = 'none';
});

// Full Interpretation
document.getElementById('interpret').addEventListener('click', () => {
    const interpretationText = generateInterpretation(reading, question, spreadType);
    document.getElementById('interpretation').textContent = interpretationText;
    document.getElementById('interpretation').style.display = 'block';
});

// New Reading
document.getElementById('newReading').addEventListener('click', () => {
    document.querySelector('.form').style.display = 'block';
    document.getElementById('reading').style.display = 'none';
    document.getElementById('interpretation').style.display = 'none';
    document.getElementById('question').value = '';
    document.getElementById('reversals').checked = true;
});