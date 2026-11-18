const SAVE_KEY = "monsterPrisonEscapeSave";

const DEFAULT_SAVE = {
    completedLevels: [false, false, false, false, false],

    difficultiesCompleted: {
        peaceful: false,
        easy: false,
        normal: false,
        hard: false,
        nightmare: false
    },

    hardcoreUnlocked: false,

    settings: {
        volume: 100,
        flashlightFlicker: true
    }
};

export function loadSave() {

    const save = localStorage.getItem(SAVE_KEY);

    if (!save) {

        localStorage.setItem(
            SAVE_KEY,
            JSON.stringify(DEFAULT_SAVE)
        );

        return structuredClone(DEFAULT_SAVE);
    }

    return JSON.parse(save);
}

export function saveGame(data) {

    localStorage.setItem(
        SAVE_KEY,
        JSON.stringify(data)
    );
}

export function resetSave() {

    localStorage.setItem(
        SAVE_KEY,
        JSON.stringify(DEFAULT_SAVE)
    );
}
