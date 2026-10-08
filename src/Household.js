class Household {
    /** @type {string} */
    #householdId = "";

    /** @type {string} */
    #name = "";

    /** @type {string} */
    #householdCode = "";

    /**
     * @param {string} name
     * @returns {boolean}
     */
    create(name) {
        // TODO: Validate the name, generate a code, and save.
    }

    /** @returns {string} */
    #generateCode() {
        // TODO: Generate a unique household code.
    }

    /** @returns {boolean} */
    save() {
        // TODO: Save the household.
    }

    /** @returns {string} */
    getCode() {
        // TODO: Return the household code.
    }
}

module.exports = Household;
