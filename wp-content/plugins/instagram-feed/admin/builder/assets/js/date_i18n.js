function date_i18n(n,t){function e(n,t){return i[n]?i[n]():t}function r(n,t){for(n=String(n);n.length<t;)n="0"+n;return n}var u,o=/\\?(.?)/gi,i={d:function(){return r(i.j(),2)},D:function(){return DATE_I18N.day_names_short[i.w()]},j:function(){return u.getDate()},l:function(){return DATE_I18N.day_names[i.w()]},N:function(){return i.w()||7},S:function(){var n=i.j(),t=n%10;return t<=3&&1==parseInt(n%100/10,10)&&(t=0),["st","nd","rd"][t-1]||"th"},w:function(){return u.getDay()},z:function(){var n=new Date(i.Y(),i.n()-1,i.j()),t=new Date(i.Y(),0,1);return Math.round((n-t)/864e5)},W:function(){var n=new Date(i.Y(),i.n()-1,i.j()-i.N()+3),t=new Date(n.getFullYear(),0,4);return r(1+Math.round((n-t)/864e5/7),2)},F:function(){return DATE_I18N.month_names[i.n()-1]},m:function(){return r(i.n(),2)},M:function(){return DATE_I18N.month_names_short[i.n()-1]},n:function(){return u.getMonth()+1},t:function(){return new Date(i.Y(),i.n(),0).getDate()},L:function(){var n=i.Y();return n%4==0&n%100!=0|n%400==0},o:function(){var n=i.n(),t=i.W();return i.Y()+(12===n&&t<9?1:1===n&&9<t?-1:0)},Y:function(){return u.getFullYear()},y:function(){return i.Y().toString().slice(-2)},a:function(){return 11<u.getHours()?"pm":"am"},A:function(){return i.a().toUpperCase()},B:function(){var n=3600*u.getUTCHours(),t=60*u.getUTCMinutes(),e=u.getUTCSeconds();return r(Math.floor((n+t+e+3600)/86.4)%1e3,3)},g:function(){return i.G()%12||12},G:function(){return u.getHours()},h:function(){return r(i.g(),2)},H:function(){return r(i.G(),2)},i:function(){return r(u.getMinutes(),2)},s:function(){return r(u.getSeconds(),2)},u:function(){return r(1e3*u.getMilliseconds(),6)},e:function(){throw"Not supported (see source code of date() for timezone on how to add support)"},I:function(){return new Date(i.Y(),0)-Date.UTC(i.Y(),0)!=new Date(i.Y(),6)-Date.UTC(i.Y(),6)?1:0},O:function(){var n=u.getTimezoneOffset(),t=Math.abs(n);return(0<n?"-":"+")+r(100*Math.floor(t/60)+t%60,4)},P:function(){var n=i.O();return n.substr(0,3)+":"+n.substr(3,2)},T:function(){return"UTC"},Z:function(){return 60*-u.getTimezoneOffset()},c:function(){return"Y-m-d\\TH:i:sP".replace(o,e)},r:function(){return"D, d M Y H:i:s O".replace(o,e)},U:function(){return u/1e3|0}};return this.date=function(n,t){return u=void 0===t?new Date:t instanceof Date?new Date(t):new Date(1e3*t),n.replace(o,e)},this.date(n,t)}