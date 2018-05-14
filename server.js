var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
const puppeteer = require('puppeteer');

app.get('/', function(req, res){
    

    var urls = ['https://motos.coches.net/fichas_tecnicas/aprilia/sr_max_300/2011-5422.htm',
    					'https://motos.coches.net/fichas_tecnicas/aprilia/rs4_50/2017-7311.htm',
		    			'https://motos.coches.net/fichas_tecnicas/aprilia/rs_125/2017-6984.htm',
		    			'https://motos.coches.net/fichas_tecnicas/aprilia/rsv4/2017-6992.htm',
		    			'https://motos.coches.net/fichas_tecnicas/aprilia/shiver_900/2017-7067.htm',
		    			'https://motos.coches.net/fichas_tecnicas/aprilia/tuono_125/2017-7310.htm',
		    			'https://motos.coches.net/fichas_tecnicas/aprilia/tuono_v4_1100/rr/2016-6420.htm',
		    			'https://motos.coches.net/fichas_tecnicas/aprilia/dorsoduro_900/2017-7068.htm',
		    			'https://motos.coches.net/fichas_tecnicas/bmw/c_650_gt/2016-6534.htm',
		    			'https://motos.coches.net/fichas_tecnicas/bmw/c_650_sport/2016-6535.htm',
		    			'https://motos.coches.net/fichas_tecnicas/bmw/s_1000_rr/2017-7279.htm',
		    			'https://motos.coches.net/fichas_tecnicas/bmw/r_ninet/racer/2017-7105.htm',
		    			'https://motos.coches.net/fichas_tecnicas/bmw/hp4/race/2017-7357.htm',
		    			'https://motos.coches.net/fichas_tecnicas/bmw/f_800_gt/2017-7393.htm',
		    			'https://motos.coches.net/fichas_tecnicas/bmw/r_1200_r/2015-6435.htm',
		    			'https://motos.coches.net/fichas_tecnicas/bmw/r_1200_r/s/2015-6441.htm',
		    			'https://motos.coches.net/fichas_tecnicas/daelim/s4_50_4t/2011-4463.htm',
		    			'https://motos.coches.net/fichas_tecnicas/daelim/aroma_125/2015-6572.htm',
		    			'https://motos.coches.net/fichas_tecnicas/daelim/besbi_125/fi/2017-7548.htm',
		    			'https://motos.coches.net/fichas_tecnicas/daelim/s1_125_fi/2008-3628.htm',
		    			'https://motos.coches.net/fichas_tecnicas/daelim/s16_125/2018-7473.htm',
		    			'https://motos.coches.net/fichas_tecnicas/daelim/steezer_125_s_fi/2015-6895.htm',
		    			'https://motos.coches.net/fichas_tecnicas/daelim/roadwin_125r_fi/2011-5681.htm',
		    			'https://motos.coches.net/fichas_tecnicas/daelim/roadwin_250r_fi/2010-4686.htm',
		    			'https://motos.coches.net/fichas_tecnicas/daelim/daystar/125_fi/2017-7414.htm',
		    			'https://motos.coches.net/fichas_tecnicas/daelim/daystar/250_fi/2014-6219.htm',
		    			'https://motos.coches.net/fichas_tecnicas/derbi/boulevard_50_2t/2007-3403.htm',
		    			'https://motos.coches.net/fichas_tecnicas/derbi/variant_sport_125/2012-5588.htm',
		    			'https://motos.coches.net/fichas_tecnicas/derbi/senda/racing_50_sm/2018-7600.htm',
		    			'https://motos.coches.net/fichas_tecnicas/ducati/1299_panigale//2015-6546.htm',
		    			'https://motos.coches.net/fichas_tecnicas/ducati/1299_panigale/r_final_edition/2018-7479.htm',
		    			'https://motos.coches.net/fichas_tecnicas/ducati/multistrada/1260/2018-7493.htm',
		    			'https://motos.coches.net/fichas_tecnicas/ducati/hypermotard_939/2016-6630.htm',
		    			'https://motos.coches.net/fichas_tecnicas/ducati/diavel/2015-6269.htm',
		    			'https://motos.coches.net/fichas_tecnicas/ducati/scrambler/street_classic/2018-7620.htm',
		    			'https://motos.coches.net/fichas_tecnicas/ducati/scrambler/classic/2015-6379.htm',
		    			'https://motos.coches.net/fichas_tecnicas/ducati/monster_821/2018-7483.htm',
		    			'https://motos.coches.net/fichas_tecnicas/ducati/monster_797/2017-7064.htm',
		    			'https://motos.coches.net/fichas_tecnicas/harleydavidson/sportster_883_iron/2009-3036.htm',
		    			'https://motos.coches.net/fichas_tecnicas/harleydavidson/street_bob/2018-7450.htm',
		    			'https://motos.coches.net/fichas_tecnicas/harleydavidson/low_rider/2018-7451.htm',
		    			'https://motos.coches.net/fichas_tecnicas/harleydavidson/breakout/2018-7453.htm',
		    			'https://motos.coches.net/fichas_tecnicas/honda/forza_125/2015-6437.htm',
		    			'https://motos.coches.net/fichas_tecnicas/honda/pcx_125/2014-6238.htm',
		    			'https://motos.coches.net/fichas_tecnicas/honda/sh_mode_125/2014-6138.htm',
		    			'https://motos.coches.net/fichas_tecnicas/honda/sh125i/2016-6691.htm',
		    			'https://motos.coches.net/fichas_tecnicas/honda/sh125i/abs/2016-6692.htm',
		    			'https://motos.coches.net/fichas_tecnicas/honda/vision/2017-7069.htm',
		    			'https://motos.coches.net/fichas_tecnicas/honda/integra/2016-6704.htm',
		    			'https://motos.coches.net/fichas_tecnicas/honda/scoopy_sh300i/2015-7605.htm',
		    			'https://motos.coches.net/fichas_tecnicas/honda/x__adv/2018-7525.htm',
		    			'https://motos.coches.net/fichas_tecnicas/honda/cb_300_r/2018-7519.htm',
		    			'https://motos.coches.net/fichas_tecnicas/honda/cbr/650_f/2017-7627.htm',
		    			'https://motos.coches.net/fichas_tecnicas/honda/cbr_1000_rr_fireblade/2017-7290.htm',
		    			'https://motos.coches.net/fichas_tecnicas/honda/cbr_500r/2016-6664.htm',
		    			'https://motos.coches.net/fichas_tecnicas/honda/crossrunner_vfr800x/2015-6398.htm',
		    			'https://motos.coches.net/fichas_tecnicas/honda/gold_wing/2018-7595.htm',
		    			'https://motos.coches.net/fichas_tecnicas/honda/vfr_800f/2014-6186.htm',
		    			'https://motos.coches.net/fichas_tecnicas/honda/cb_125/f/2015-6423.htm',
		    			'https://motos.coches.net/fichas_tecnicas/honda/cb_500f/2016-6663.htm',
		    			'https://motos.coches.net/fichas_tecnicas/honda/cb650_f/2017-7334.htm',
		    			'https://motos.coches.net/fichas_tecnicas/honda/nc_750/s/2016-6702.htm',
		    			'https://motos.coches.net/fichas_tecnicas/honda/crf1000l_africa_twin/2018-7521.htm',
		    			'https://motos.coches.net/fichas_tecnicas/honda/crosstourer/2016-6776.htm',
		    			'https://motos.coches.net/fichas_tecnicas/hyosung/gt_125r_comet/2007-2270.htm',
		    			'https://motos.coches.net/fichas_tecnicas/kawasaki/j_125/2015-6610.htm',
		    			'https://motos.coches.net/fichas_tecnicas/kawasaki/j_300/2014-6162.htm',
		    			'https://motos.coches.net/fichas_tecnicas/kawasaki/ninja_300/2013-5738.htm',
		    			'https://motos.coches.net/fichas_tecnicas/kawasaki/ninja_400/2018-7475.htm',
		    			'https://motos.coches.net/fichas_tecnicas/kawasaki/ninja_h2/2015-6425.htm',
		    			'https://motos.coches.net/fichas_tecnicas/kawasaki/zx_10r/2016-6649.htm',
		    			'https://motos.coches.net/fichas_tecnicas/kawasaki/zx_6r_636/2013-5746.htm',
		    			'https://motos.coches.net/fichas_tecnicas/kawasaki/z_1000/2014-6208.htm',
		    			'https://motos.coches.net/fichas_tecnicas/kawasaki/z_250_sl/2015-6430.htm',
		    			'https://motos.coches.net/fichas_tecnicas/kawasaki/z_300/2015-6432.htm',
		    			'https://motos.coches.net/fichas_tecnicas/kawasaki/z_650/2017-7159.htm',
		    			'https://motos.coches.net/fichas_tecnicas/kawasaki/z_900/2017-7199.htm',
		    			'https://motos.coches.net/fichas_tecnicas/kawasaki/z900rs/2018-7476.htm',
		    			'https://motos.coches.net/fichas_tecnicas/kawasaki/versys/650/2015-6505.htm',
		    			'https://motos.coches.net/fichas_tecnicas/keeway/fact_evo_50/2011-5256.htm',
		    			'https://motos.coches.net/fichas_tecnicas/keeway/arn_125/2006-2002.htm',
		    			'https://motos.coches.net/fichas_tecnicas/keeway/zahara_125/2012-5741.htm',
		    			'https://motos.coches.net/fichas_tecnicas/keeway/zahara_50/2015-6646.htm',
		    			'https://motos.coches.net/fichas_tecnicas/keeway/rks_125/2011-5254.htm',
		    			'https://motos.coches.net/fichas_tecnicas/keeway/superlight_125/2006-2003.htm',
		    			'https://motos.coches.net/fichas_tecnicas/ktm/rc/125/2014-6233.htm',
		    			'https://motos.coches.net/fichas_tecnicas/ktm/rc/390/2014-6235.htm',
		    			'https://motos.coches.net/fichas_tecnicas/ktm/125/duke/2017-7076.htm',
		    			'https://motos.coches.net/fichas_tecnicas/ktm/390/duke/2017-7077.htm',
		    			'https://motos.coches.net/fichas_tecnicas/ktm/1290_super_duke_gt/2016-6665.htm',
		    			'https://motos.coches.net/fichas_tecnicas/ktm/690_duke/2016-6599.htm',
		    			'https://motos.coches.net/fichas_tecnicas/ktm/790/duke/2018-7558.htm',
		    			'https://motos.coches.net/fichas_tecnicas/ktm/690_smc_r/abs/2014-6279.htm',
		    			'https://motos.coches.net/fichas_tecnicas/ktm/1090_adventure/2017-6995.htm',
		    			'https://motos.coches.net/fichas_tecnicas/kymco/agility_50/2006-1838.htm',
		    			'https://motos.coches.net/fichas_tecnicas/kymco/people_50_s/2007-3449.htm',
		    			'https://motos.coches.net/fichas_tecnicas/kymco/agility_city_125/2016-6727.htm',
		    			'https://motos.coches.net/fichas_tecnicas/kymco/grand_dink_125/2016-6773.htm',
		    			'https://motos.coches.net/fichas_tecnicas/kymco/k__xct_125i/2013-5851.htm',
		    			'https://motos.coches.net/fichas_tecnicas/kymco/like_125/2018-7666.htm',
		    			'https://motos.coches.net/fichas_tecnicas/kymco/ak_550/2017-6985.htm',
		    			'https://motos.coches.net/fichas_tecnicas/kymco/grand_dink_300/2016-6774.htm',
		    			'https://motos.coches.net/fichas_tecnicas/kymco/xciting_400i/2013-5797.htm',
		    			'https://motos.coches.net/fichas_tecnicas/motoguzzi/stornello/2014-7143.htm',
		    			'https://motos.coches.net/fichas_tecnicas/motoguzzi/v7_ii/special/2014-6295.htm',
		    			'https://motos.coches.net/fichas_tecnicas/motoguzzi/v7_iii/stone/2017-7097.htm',
		    			'https://motos.coches.net/fichas_tecnicas/motoguzzi/v9/bobber/2016-6659.htm',
		    			'https://motos.coches.net/fichas_tecnicas/motoguzzi/eldorado/2016-6626.htm',
		    			'https://motos.coches.net/fichas_tecnicas/piaggio/liberty_50/i__get/2017-7017.htm',
		    			'https://motos.coches.net/fichas_tecnicas/piaggio/fly_125/3v/2017-7023.htm',
		    			'https://motos.coches.net/fichas_tecnicas/piaggio/liberty/s_125_i__get/2017-7021.htm',
		    			'https://motos.coches.net/fichas_tecnicas/piaggio/x_evo_125/2009-4141.htm',
		    			'https://motos.coches.net/fichas_tecnicas/piaggio/beverly_300ie/2017-7013.htm',
		    			'https://motos.coches.net/fichas_tecnicas/piaggio/mp3/300_sport/2017-7029.htm',
		    			'https://motos.coches.net/fichas_tecnicas/piaggio/mp3/500_sport/2014-6481.htm',
		    			'https://motos.coches.net/fichas_tecnicas/piaggio/mp3_300_yourban/2011-5266.htm',
		    			'https://motos.coches.net/fichas_tecnicas/piaggio/mp3_500_sport/2017-7031.htm',
		    			'https://motos.coches.net/fichas_tecnicas/piaggio/x7_evo_300_ie/2011-5338.htm',
		    			'https://motos.coches.net/fichas_tecnicas/suzuki/burgman_125_abs/2014-6121.htm',
		    			'https://motos.coches.net/fichas_tecnicas/suzuki/burgman_200/2014-6122.htm',
		    			'https://motos.coches.net/fichas_tecnicas/suzuki/burgman_400/2018-7412.htm',
		    			'https://motos.coches.net/fichas_tecnicas/suzuki/gsx_r600/2011-5037.htm',
		    			'https://motos.coches.net/fichas_tecnicas/suzuki/gsx_r750/2011-5038.htm',
		    			'https://motos.coches.net/fichas_tecnicas/suzuki/gsx__r1000/2017-7395.htm',
		    			'https://motos.coches.net/fichas_tecnicas/suzuki/gsx__s/1000/2015-7590.htm',
		    			'https://motos.coches.net/fichas_tecnicas/suzuki/gsx__s/1000_f/2015-6513.htm',
		    			'https://motos.coches.net/fichas_tecnicas/suzuki/gladius_650/2010-3076.htm',
		    			'https://motos.coches.net/fichas_tecnicas/suzuki/gsr_750/z/2012-6473.htm',
		    			'https://motos.coches.net/fichas_tecnicas/suzuki/sv_650/2016-6679.htm',
		    			'https://motos.coches.net/fichas_tecnicas/suzuki/vanvan_125/2010-4986.htm',
		    			'https://motos.coches.net/fichas_tecnicas/suzuki/v__strom_1000/abs/2017-6974.htm',
		    			'https://motos.coches.net/fichas_tecnicas/sym/fiddle_iii/2014-6353.htm',
		    			'https://motos.coches.net/fichas_tecnicas/sym/symphony_50/50_4t/2014-6908.htm',
		    			'https://motos.coches.net/fichas_tecnicas/sym/allo_124_4t/2011-5309.htm',
		    			'https://motos.coches.net/fichas_tecnicas/sym/fiddle_iii_125/2014-6172.htm',
		    			'https://motos.coches.net/fichas_tecnicas/sym/hd2_125/2011-5345.htm',
		    			'https://motos.coches.net/fichas_tecnicas/sym/cruisym/300/2018-7661.htm',
		    			'https://motos.coches.net/fichas_tecnicas/sym/joymax_300i_abs/ss_comfort/2015-6672.htm',
		    			'https://motos.coches.net/fichas_tecnicas/sym/maxsym_400/2010-4782.htm',
		    			'https://motos.coches.net/fichas_tecnicas/triumph/daytona_675/2013-5790.htm',
		    			'https://motos.coches.net/fichas_tecnicas/triumph/bonneville/t__100/2017-7044.htm',
		    			'https://motos.coches.net/fichas_tecnicas/triumph/speed_triple/rs/2018-7625.htm',
		    			'https://motos.coches.net/fichas_tecnicas/triumph/street/scrambler/2017-7284.htm',
		    			'https://motos.coches.net/fichas_tecnicas/triumph/street_triple/r/2017-7275.htm',
		    			'https://motos.coches.net/fichas_tecnicas/triumph/bonneville/bobber/2017-7232.htm',
		    			'https://motos.coches.net/fichas_tecnicas/triumph/thunderbird_storm/2011-5053.htm',
		    			'https://motos.coches.net/fichas_tecnicas/triumph/tiger_1050_abs/2010-5154.htm',
		    			'https://motos.coches.net/fichas_tecnicas/vespa/primavera/50_2t/2014-6317.htm',
		    			'https://motos.coches.net/fichas_tecnicas/vespa/primavera/50_4t_4v/2014-7217.htm',
		    			'https://motos.coches.net/fichas_tecnicas/vespa/sprint_50/2t/2014-7219.htm',
		    			'https://motos.coches.net/fichas_tecnicas/vespa/gts_125_ie_super/abs_asr/2015-7224.htm',
		    			'https://motos.coches.net/fichas_tecnicas/vespa/primavera/125ie_3v_abs/2014-6434.htm',
		    			'https://motos.coches.net/fichas_tecnicas/vespa/gts_300_ie/super/2014-6301.htm',
		    			'https://motos.coches.net/fichas_tecnicas/yamaha/aerox_50_r/2011-5848.htm',
		    			'https://motos.coches.net/fichas_tecnicas/yamaha/jog_50_rr/2013-2062.htm',
		    			'https://motos.coches.net/fichas_tecnicas/yamaha/nmax/2015-6490.htm',
		    			'https://motos.coches.net/fichas_tecnicas/yamaha/tricity_125/2017-7058.htm',
		    			'https://motos.coches.net/fichas_tecnicas/yamaha/x__max_125/2018-7465.htm',
		    			'https://motos.coches.net/fichas_tecnicas/yamaha/tmax_530/abs/2017-7292.htm',
		    			'https://motos.coches.net/fichas_tecnicas/yamaha/x__max_300/2017-7012.htm',
		    			'https://motos.coches.net/fichas_tecnicas/yamaha/x__max_400/2017-7425.htm',
		    			'https://motos.coches.net/fichas_tecnicas/yamaha/yzf_r_125/abs/2017-7291.htm',
		    			'https://motos.coches.net/fichas_tecnicas/yamaha/yzf_r1/yzf__r1/2018-7526.htm',
		    			'https://motos.coches.net/fichas_tecnicas/yamaha/yzf_r6/__r/2017-7297.htm',
		    			'https://motos.coches.net/fichas_tecnicas/yamaha/mt_09/2017-7582.htm',
		    			'https://motos.coches.net/fichas_tecnicas/yamaha/mt10/2016-6589.htm',
		    			'https://motos.coches.net/fichas_tecnicas/yamaha/xsr700/2016-6516.htm',
		    			'https://motos.coches.net/fichas_tecnicas/yamaha/xv_950r_abs/2014-5988.htm',
		    			'https://motos.coches.net/fichas_tecnicas/yamaha/tracer_700/2016-6716.htm',
		    			'https://motos.coches.net/fichas_tecnicas/yamaha/tracer_900/2018-7522.htm',

    					];
    var dataBase = [];


    // The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameters, an error, response status code and the html
   urls.forEach(function(url){
    request(url, function(error, response, html){

      // First we'll check to make sure no errors occurred when making the request

      if(!error){
        // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

        var $ = cheerio.load(html);

        // Finally, we'll define the variables we're going to capture

        var marca, modelo, cilindrada, potencia, precio;
        var json = { marca : "", modelo : "", cilindrada : "", potencia: "", precio: ""};
        // let element = ;
        
       
	      $("h3:contains('Fabricante')").filter(function(){
	          var data = $(this);
	          marca = data.next().text();
	          
	          json.marca = marca
	          
	      })
	      $("h3:contains('Modelo')").filter(function(){
	          var data = $(this);
	          modelo = data.next().text();
	          
	          json.modelo = modelo;
	          
	      })
	      $("span:contains('cc')").filter(function(){
	          var data = $(this);
	          cilindrada = data.text();
	          
	          json.cilindrada = cilindrada;
	          
	      })
	      $("span:contains('cv')").filter(function(){
	          var data = $(this);
	          potencia = data.text();
	          
	          json.potencia = potencia;
	          
	      })
	      $("span:contains('€')").filter(function(){
	          var data = $(this);
	          precio = data.text();
	          
	          json.precio = precio;
	          
	      })
	      dataBase.push(json);
	      console.log(dataBase);
	    }
	  })
	})
		      // fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

					//console.log('File successfully written! - Check your project directory for the output.json file');

					// })
		      

})
    





app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;