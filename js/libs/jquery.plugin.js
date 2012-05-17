//	jQuery.plugin.js =========================================
//
//	Version: 		0.2
//	Created: 		2012-05-17
//	Owner: 			Karim Maassen - contact@karimmaassen.com
//
//	Dependancies: 	- jQuery 1.7.2
//
//	Copyright (c) 2012 Karim Maassen - http://www.karimmaassen.com
//	 
//	Permission is hereby granted, free of charge, to any person obtaining a copy
//	of this software and associated documentation files (the "Software"), to deal
//	in the Software without restriction, including without limitation the rights
//	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//	copies of the Software, and to permit persons to whom the Software is
//	furnished to do so, subject to the following conditions:
//	
//	The above copyright notice and this permission notice shall be included in
//	all copies or substantial portions of the Software.
//	
//	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//	THE SOFTWARE.


/*===== Closure ============================================*/

(function($, document, window, undefined) {

/*===== Plugin =============================================*/

var Plugin = (function() {

	var _privateString 	= 'string',
		_privateBool 	= true,
		_privateObject 	= {},
		_privateArray 	= [];

	function _privateFunction() {

		return _privateString;
	};

	/* --- Modules ----------------------- */

	function Module(){

		/* --- Private ----------------------- */

		var _privateObject = {};

		_privateObject.string = 'string';

		/* --- Public ------------------------ */

		this.publicFunction = function() {

			console.log('public function called');
		};

		this.getPrivateObject = function(){

			return _privateObject;
		};

		this.publicObject = {

			x: 1,
			y: _privateObject.string
		};

	}; 	//	function module(){ return new Module(); };

	function SubClass(){

		this.newString = 'new string';
		
	};  //	function subClass(){ return new SubClass(); };
		SubClass.prototype = new Module();

	/* --- Public Interface -------------- */

	return {

		publicVariable: 	null,
		publicObject: 		{},
		publicArray: 		[],
		publicString: 		"string",

		/* --- Methods ----------------------- */

		init: function(options, elem) { 
			var self = this;

			self.$this = elem;

			self.options = $.extend({}, $.fn.plugin.options, options);

			if (self.options.development) console.log('Initialized');

			return self;
		},

		/* ------------------------------------ */

		speak: function(text) { 
			var self = this;

			console.log(text || 'Hello World!');

			return self;
		},

		/* --- Objects ----------------------- */

		someObject: function() { var self = this;

			return false;
		},

		View: function(){ var self = this;

			return view();
		},

		Module: function(){ var self = this;

			return module();
		}

	/* ----------------------------------- */

	}; // Return public interface

})(); // Return closure

/*==========================================================*/

$.fn.plugin = function(options) {

	return this.each(function() {

		var plugin = $.extend({}, Plugin);
		
		plugin.init(options, this);

		$.data(this, 'plugin', plugin);
	});
};

$.fn.plugin.options = {

	development: 	false,
	value: 			null
};

/*==========================================================*/

})( jQuery, window, document );
