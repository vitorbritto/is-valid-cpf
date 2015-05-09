/*!
 * Copyright 2015, All Rights Reserved.
 *
 * Code licensed under the MIT License:
 * http://vitorbritto.mit-license.org/
 *
 * Author: Vitor Britto <code@vitorbritto.com.br>
 */


(function(window, document, undefined) {

    'use strict';

    var isValid = (function() {

        var validate = validate || {};

        // VALIDATE METHOD
        validate.inputCpf = function(cpf) {

            var cpfPattern = /^((\d{3})\.){3}\-\d{2}$/;
            return cpfPattern.test(cpf);

        };

        // INITIALIZE MODULE
        return {
            cpf: validate.inputCpf
        };

    })();

    // Global
    window.isValid = isValid;

})(window, document);

