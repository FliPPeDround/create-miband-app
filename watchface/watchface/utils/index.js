export function switchUI(b){
  img_bkg.setProperty(hmUI.prop.VISIBLE, b);
  txtBg.setProperty(hmUI.prop.VISIBLE, !b);
  txtGroup.setProperty(hmUI.prop.VISIBLE, !b);
}
