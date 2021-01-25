/*!
Project: FloydCraft WebOS
Liscense: MIT
Author: rmellis | tallulah95
Date: 10/11/20
*/
new explorer.window()
.title('Minecraft Tools Launcher')
.resize(570, 361)
.center()
.icon('programs/FCtools/icons/FCTools.png')
.controls(['min'])
.callback(function() {
	var butts = [
		{
			text: 'Armor',
			icon: 'programs/FCtools/icons/ArmorCraftingRecipe.png',
			callback: function() {
				system.loader('programs/FCtools/ArmorCraftingRecipe.js');
			}
		}, {
			text: 'Banner',
			icon: 'programs/FCtools/icons/BannerCrafting.png',
			callback: function() {
				system.loader('programs/FCtools/BannerCrafting.js');
			}
		}, {
			text: 'Becon',
			icon: 'programs/FCtools/icons/BeconCrafting.png',
			callback: function() {
				system.loader('programs/FCtools/BeconCrafting.js');
			}
		}, {
			text: 'BlockEdit',
			icon: 'programs/FCtools/icons/BookEditor.png',
			callback: function() {
				system.loader('programs/FCtools/BookEditor.js');
			}
		}, {
			text: 'Colors',
			icon: 'programs/FCtools/icons/ColorCodes.png',
			callback: function() {
				system.loader('programs/FCtools/ColorCodes.js');
			}
		}, {
			text: 'CordCalc',
			icon: 'programs/FCtools/icons/CoordinateCalculator.png',
			callback: function() {
				system.loader('programs/FCtools/CoordinateCalculator.js');
			}
		}, {
			text: 'Crafting',
			icon: 'programs/FCtools/icons/Crafting.png',
			callback: function() {
				system.loader('programs/FCtools/Crafting.js');
			}
		}, {
			text: 'Presets',
			icon: 'programs/FCtools/icons/CustomizedWorldPresetGenerator.png',
			callback: function() {
				system.loader('programs/FCtools/CustomizedWorldPresetGenerator.js');
			}
		}, {
			text: 'Potion',
			icon: 'programs/FCtools/icons/CustomPotions.png',
			callback: function() {
				system.loader('programs/FCtools/CustomPotions.js');
			}
		}, {
			text: 'SignGen',
			icon: 'programs/FCtools/icons/CustomSignGenerator.png',
			callback: function() {
				system.loader('programs/FCtools/CustomSignGenerator.js');
			}
		}, {
			text: 'Enchant',
			icon: 'programs/FCtools/icons/EnchantCalculator.png',
			callback: function() {
				system.loader('programs/FCtools/EnchantCalculator.js');
			}
		}, {
			text: 'Firework',
			icon: 'programs/FCtools/icons/FireworkCrafting.png',
			callback: function() {
				system.loader('programs/FCtools/FireworkCrafting.js');
			}
		}, {
			text: 'SeedGen',
			icon: 'programs/FCtools/icons/FlatWorldSeedGen.png',
			callback: function() {
				system.loader('programs/FCtools/FlatWorldSeedGen.js');
			}
		}, {
			text: 'JSONgen',
			icon: 'programs/FCtools/icons/JSONTextGenerator.png',
			callback: function() {
				system.loader('programs/FCtools/JSONTextGenerator.js');
			}
		}, {
			text: 'Loot',
			icon: 'programs/FCtools/icons/LootTableGenerator.png',
			callback: function() {
				system.loader('programs/FCtools/LootTableGenerator.js');
			}
		}, {
			text: 'Summon',
			icon: 'programs/FCtools/icons/MobSpawnerAndSummonCommandGenerator.png',
			callback: function() {
				system.loader('programs/FCtools/MobSpawnerAndSummonCommandGenerator.js');
			}
		}, {
			text: 'MOTDs',
			icon: 'programs/FCtools/icons/MOTDedit.png',
			callback: function() {
				system.loader('programs/FCtools/MOTDedit.js');
			}
		}, {
			text: 'Shields',
			icon: 'programs/FCtools/icons/ShieldCrafting.png',
			callback: function() {
				system.loader('programs/FCtools/ShieldCrafting.js');
			}
		}, {
			text: 'SkinSteal',
			icon: 'programs/FCtools/icons/SkinStealer.png',
			callback: function() {
				system.loader('programs/FCtools/SkinStealer.js');
			}
		}, {
			text: 'StyleText',
			icon: 'programs/FCtools/icons/StyledText.png',
			callback: function() {
				system.loader('programs/FCtools/StyledText.js');
			}
		}, {
			text: 'Target',
			icon: 'programs/FCtools/icons/TargetSelector.png',
			callback: function() {
				system.loader('programs/FCtools/TargetSelector.js');
			}
		}, {
			text: '/tellraw',
			icon: 'programs/FCtools/icons/TellRawEditor.png',
			callback: function() {
				system.loader('programs/FCtools/TellRawEditor.js');
			}
		}, {
			text: 'TitleGen',
			icon: 'programs/FCtools/icons/TitleGenerator.png',
			callback: function() {
				system.loader('programs/FCtools/TitleGenerator.js');
			}
		}, {
			text: 'Help',
			icon: 'webdows/resources/icons/ques.ico',
			callback: function() {
				system.loader('programs/Help/help.js');
			}
		}, {
			text: 'About',
			icon: 'webdows/resources/icons/info.ico',
			callback: function() {
				system.loader('webdows/webver.js');
			}
		}
	];
	var body = this.body;
	body.css({'padding-top':'100px','text-align':'center','overflow-x':'hidden'});
	body.html('<div class="topframe"><div class="welc">Minecraft Tools</div><div class="stat">MineCraft Tools<br>'+platform.name+' '+platform.version+'<br>'+platform.layout+'<br>'+platform.os+'<br>'+location.hostname+'</div></div>');
	$.each(butts, function() {
		var buttID = system.guid();
		body.append('<button buttID="'+buttID+'" class="butt"><span style="background-image:url(\''+this.icon+'\');" class="icon"></span>'+this.text+'</button>');
		body.find('button[buttID='+buttID+']').click(this.callback);
	});
	body.find('.topframe').attr('style', 'top:0px;left:0px;background-repeat:no-repeat;background-size:100px 100px, 100% 100%;position:absolute;height:100px;width:100%;background-image:url(\'programs/FCtools/2.png\'), url(\'programs/FCtools/1.png\');');
	body.find('.welc').attr('style', 'color:rgba(255,255,255,0.5);font-size:40px;position:absolute;bottom:0px;right:10px;');
	body.find('.stat').attr('style', 'white-space:nowrap;text-align:left;font-size:12px;margin-top:5px;margin-left:110px;color:white;text-shadow:1px 1px 3px black;');
	body.find('.butt').attr('style', 'line-height:32px;margin:5px;height:35px;width:100px;');
	body.find('.icon').css({'width':'30px','height':'30px','float':'left'});
});
