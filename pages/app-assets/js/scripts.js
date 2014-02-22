//No Conflict
$j = jQuery.noConflict();
var Trigger = {
	staticEffects: {
		//Show/Hide the instruction box if provided to client
		showInstruction: function() {
			$j('#hideInstructions').hide();
			$j('#instructionsContainer').hide();
			$j('#showInstructions').click(function(){
				$j('#instructionsContainer').slideDown(300);
				$j('#showInstructions').hide();
				$j('#hideInstructions').show();
			});
		},
		hideInstruction: function() {
			$j('#showInstructions').show();
			$j('#hideInstructions').click(function(){
				$j('#instructionsContainer').slideUp(300);
				$j('#hideInstructions').hide();
				$j('#showInstructions').show();
			});
		},
		
		//Dropbown menu for the 'more' link in the menu
		showDropDown	: function() {
			function hideList(a){
				clearTimeout(a.data('dropdown').tim);
				return setTimeout(function(){
					a.stop(!0).slideUp(300)},125)
				}
				$j('li.more').on('mouseover','a.moreLink',function(){
					var a=$j(this).siblings('ul').slideDown(300);
					clearTimeout(a.data('dropdown').tim)
				}).on('mouseout',function(){
					var a=$j(this).children('ul');
					a.data('dropdown').tim=hideList(a)
				}).children('ul').on('mouseover',function(){
					clearTimeout($j(this).data('dropdown').tim)
				}).on('mouseout',function(){
					var a=$j(this);
					a.data('dropdown').tim=hideList(a)
				}).data('dropdown',{tim:null}).hide();
		},
												
		//Dropup menu for the action botton when it's the bottom of the page										
		showActionDropUp	: function() {
			$j('.actionDropUp ul').hide();
			$j('.actionDropUp .btn').click(function(){
				$j('.actionDropUp ul').toggle(300);
			});
		},
		
		//Dropdown menu for the action botton when it's at the top of the page	
		showActionDropDown: function() {
			$j('.actionDropDown ul').hide();
			$j('.actionDropDown .btn').click(function(){
				$j('.actionDropDown ul').toggle(300);
			});
		},
		
		//Dropdown filter form
		showFilterDropDown: function() {
			$j('.filterDropDown .filterFormContainer').hide();
			$j('.filterDropDown .filterLink').click(function(){
				$j('.filterDropDown .filterFormContainer').toggle(300);
			});
		},
		
		//Filter Alphanumeric Sort
		alphaNumSort		: function() {
			$j('#sortList').listnav({
				includeOther: true, //For words starting with special characters like É, Å etc...
				prefixes		: ['the','a'], //To show items that starts with 'The' under T and under the respective first letter after 'The'
				showCounts	: false,
				noMatchText	: 'There are no matching entries.' //Message if no items found under certain letters
			});
		},
		
		//Show/Hide CRM Form (or any form) when 'Edit' is clicked. Look at the HTML file to see the structure
		showCrmEditMode	: function() {
			$j('.crmEdit').hide();
			$j('.showEditMode').on('click',function(){
				$j('.crmEdit').show();
				$j('.crmDisplay').hide();
			});
		},
		cancelCrmEditMode	: function() {
			$j('.showBasicMode').on('click',function(){
				$j('.crmDisplay').show();
				$j('.crmEdit').hide();
			});
		},
		
		//CRM Contact Selector (Email, Cell, Home Phone etc...)
		contactSelector	: function() {
			$j('#contactFields div').hide();
			$j('#emailField').show();
			$j('#ContactSelector').change(function(){
				$j('#contactFields div').hide();
				$j('#' + $j(this).val()).show();
			});
		},
		
		//CRM Address Selector (Home Addres, Work Address etc...)						
		addressSelector	: function() {
			$j('.workAddressFields').hide();
			$j('#addressSelector').change(function () {
				$j('#addressWrapper div').hide();
				$j('.' + $j(this).val()).show();
			});
		}
	},
	forms: {
		//Faking File input to look and work like BC's file input
		fileInputName	: function() {$j('.fileInput input').change(function() {$j('#filename').val($j(this).val());});},
		
		//Put some labels inside the field importantly for address fields (city, state, postcode/zipcode)
		labelInField	: function() {$j('.inField label').inFieldLabels();},
		
		//Master Checkbox to check all in a list
		masterCheckAll	: function() {
			$j('#DemoCheckAll').click(function(){
				var masterChecked = this.checked;
				$j('.checkChild').each(function(){
					this.checked = masterChecked;
				});
			});
		}
	}
};
//Let's trigger all the above on page load.
$j(document).ready(function($){
	Trigger.staticEffects.showInstruction();
	Trigger.staticEffects.hideInstruction();
	Trigger.staticEffects.showDropDown();
	Trigger.staticEffects.showActionDropUp();
	Trigger.staticEffects.showActionDropDown();
	Trigger.staticEffects.showFilterDropDown();
	Trigger.staticEffects.alphaNumSort();
	Trigger.staticEffects.showCrmEditMode();
	Trigger.staticEffects.cancelCrmEditMode();
	Trigger.staticEffects.contactSelector();
	Trigger.staticEffects.addressSelector();
	Trigger.forms.fileInputName();
	Trigger.forms.labelInField();
	Trigger.forms.masterCheckAll();
});