module.exports = {
    install: function(less, pluginManager) {
        less.functions.functionRegistry.addMultiple(require("./functions")(less));
    }
};
