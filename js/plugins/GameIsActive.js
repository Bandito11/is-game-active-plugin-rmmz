/*:
 * @target MZ
 * @plugindesc Fix focus bug for mobile platform.
 * @author Esteban Morales
 *
 * @help GameIsActive.js
 *
 * This plugin add a check for mobile platform and just returns
 * true for the game is already active so that the canvas is shown
 * on the screen.
 *
 * Bug solved by yymess and his pals,.
 * (https://forums.rpgmakerweb.com/index.php?threads/what-happened-to-ios-export-option.125515/page-3#post-1128137)
 *
 * There's no plugin commands to set.
 */

if (
  navigator.userAgent.toLowerCase().match('iphone') ||
  navigator.userAgent.toLowerCase().match('android') ||
  navigator.userAgent.toLowerCase().match('ipad')
) {
  const alias = SceneManager.isGameActive;
  SceneManager.isGameActive = function () {
    alias.apply(this, arguments);
    return true;
  };
}
