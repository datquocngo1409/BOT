module.exports = {
    cats: [
        'https://i.imgur.com/Qbg7CeM.jpg',
        'https://i.imgur.com/nUzkpJY.jpg',
        'https://i.imgur.com/NpDcKph.jpg',
        'https://i.imgur.com/oJtSDaO.jpg',
        'https://i.redd.it/82ajpsrd17111.jpg',
        'https://i.redd.it/00km1d2rt0111.jpg',
        'https://i.redd.it/rdbavhp0y7111.jpg',
        'https://i.redd.it/5hn3mg0n98111.jpg',
        'https://i.redd.it/d23pb8mta6111.jpg',
        'https://i.redd.it/d2gyrwgy7oz01.jpg',
        'https://i.redd.it/z4sgl84q72z01.jpg',
        'https://i.redd.it/wvykzo8n1cy01.jpg'
    ],

    dogs: [
        'https://i.redd.it/6tjihi2qe7111.jpg',
        'https://i.imgur.com/etRCs56.jpg',
        'https://i.redd.it/nibw50f8y4111.jpg',
        'https://i.redd.it/izcvnvj1o7111.jpg',
        'https://i.redd.it/eqs1g9dldz011.jpg',
        'https://i.redd.it/civ9dnu9u1111.jpg',
        'https://i.redd.it/kk03qwclkp011.jpg',
        'https://i.redd.it/2694pupjne011.jpg',
        'https://i.redd.it/qk49ls5y6oy01.jpg',
        'https://i.imgur.com/oM3mKgB.jpg',
        'https://i.redd.it/8kx2riaulux01.jpg'
    ]
};

const fs = require("fs");
const login = require("facebook-chat-api");

login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if (err) return console.error(err);

    api.setOptions({forceLogin: true, selfListen: false, logLevel: "silent", listenEvents: true});

    function haveWe(message) {
        return (
            /Chúng ta/.test(message.body) || /chúng ta/.test(message.body) ||
            /Chúng mình/.test(message.body) || /chúng mình/.test(message.body) ||
            /Bọn mình/.test(message.body) || /bọn mình/.test(message.body)
        );
    }

    function haveThey(message) {
        return (
            /Bọn/.test(message.body) || /bọn/.test(message.body)
        );
    }

    function havePersionReplyMessage(message) {
        return (
            /Cậu/.test(message.body) || /cậu/.test(message.body) ||
            /Bạn/.test(message.body) || /bạn/.test(message.body) ||
            /C/.test(message.body) || /c/.test(message.body) ||
            /M/.test(message.body) || /m/.test(message.body) ||
            /Mày/.test(message.body) || /mày/.test(message.body) ||
            /Con/.test(message.body) || /con/.test(message.body) ||
            /Đằng ấy/.test(message.body) || /đằng ấy/.test(message.body) ||
            /Tên kia/.test(message.body) || /tên kia/.test(message.body) ||
            /Đạt/.test(message.body) || /đạt/.test(message.body)
        );
    }

    function havePersionSentMessage(message) {
        return (
            /Tớ/.test(message.body) || /tớ/.test(message.body) ||
            /Tôi/.test(message.body) || /tôi/.test(message.body) ||
            /T/.test(message.body) || /t/.test(message.body) ||
            /Tao/.test(message.body) || /tao/.test(message.body) ||
            /Ta/.test(message.body) || /ta/.test(message.body) ||
            /Mình/.test(message.body) || /mình/.test(message.body) ||
            /Mìn/.test(message.body) || /mìn/.test(message.body) ||
            /Bạn/.test(message.body) || /bạn/.test(message.body)
        );
    }

    function haveDeny(message) {
        return (
            /Không/.test(message.body) || /không/.test(message.body) ||
            /K /.test(message.body) || /k /.test(message.body) ||
            /Ko/.test(message.body) || /ko/.test(message.body) ||
            /No/.test(message.body) || /no/.test(message.body) ||
            /Đ /.test(message.body) || /đ /.test(message.body) ||
            /Lồn/.test(message.body) || /lồn/.test(message.body) ||
            /Cặc/.test(message.body) || /cặc/.test(message.body) ||
            /Card/.test(message.body) || /card/.test(message.body) ||
            /Đéo/.test(message.body) || /đéo/.test(message.body) ||
            message.body === "Đ" || message.body === "đ" ||
            message.body === "D" || message.body === "d" ||
            message.body === "K" || message.body === "k"
        );
    }

    function haveBullShitWord(message) {
        return (
            /Đcu/.test(message.body) || /đcu/.test(message.body) ||
            /Dcu/.test(message.body) || /dcu/.test(message.body) ||
            /Đm/.test(message.body) || /đm/.test(message.body) ||
            /Dm/.test(message.body) || /dm/.test(message.body) ||
            /Đcm/.test(message.body) || /đcm/.test(message.body) ||
            /Dcm/.test(message.body) || /dcm/.test(message.body) ||
            /Dkm/.test(message.body) || /dkm/.test(message.body) ||
            /Đkm/.test(message.body) || /đkm/.test(message.body) ||
            /Cc/.test(message.body) || /cc/.test(message.body) ||
            /Vl/.test(message.body) || /vl/.test(message.body) ||
            /Vcl/.test(message.body) || /vcl/.test(message.body) ||
            /Địt/.test(message.body) || /địt/.test(message.body) ||
            /Lồn/.test(message.body) || /lồn/.test(message.body) ||
            /Cặc/.test(message.body) || /cặc/.test(message.body) ||
            /Buồi/.test(message.body) || /buồi/.test(message.body) ||
            /Vãi/.test(message.body) || /vãi/.test(message.body)
        );
    }

    function haveLikeWord(message) {
        return (
            /Thích/.test(message.body) || /thích/.test(message.body) ||
            /Yêu/.test(message.body) || /yêu/.test(message.body) ||
            /Đổ/.test(message.body) || /đổ/.test(message.body) ||
            /Like/.test(message.body) || /like/.test(message.body) ||
            /Love/.test(message.body) || /love/.test(message.body)
        );
    }

    function haveTalkWord(message) {
        return (
            /Nói/.test(message.body) || /nói/.test(message.body) ||
            /Sủa/.test(message.body) || /sủa/.test(message.body) ||
            /Gáy/.test(message.body) || /gáy/.test(message.body) ||
            /Kêu/.test(message.body) || /kêu/.test(message.body) ||
            /kể/.test(message.body) || /Kể/.test(message.body)
        );
    }

    function blameMe(message) {
        return (
            /Ngu/.test(message.body) || /ngu/.test(message.body) ||
            /Óc/.test(message.body) || /óc/.test(message.body) ||
            /Đểu/.test(message.body) || /đểu/.test(message.body) ||
            /Rởm/.test(message.body) || /rởm/.test(message.body) ||
            /Yếu/.test(message.body) || /yếu/.test(message.body) ||
            /Cùi/.test(message.body) || /cùi/.test(message.body) ||
            /Đần/.test(message.body) || /đần/.test(message.body) ||
            /Chán/.test(message.body) || /chán/.test(message.body) ||
            /Kém/.test(message.body) || /kém/.test(message.body)
        )
    }

    function commendedMe(message) {
        return (
            /Xinh/.test(message.body) || /xinh/.test(message.body) ||
            /Xink/.test(message.body) || /xink/.test(message.body) ||
            /Kinh/.test(message.body) || /kinh/.test(message.body) ||
            /Kin/.test(message.body) || /kin/.test(message.body) ||
            /Giỏi/.test(message.body) || /giỏi/.test(message.body) ||
            /Thông minh/.test(message.body) || /thông minh/.test(message.body) ||
            /Hay/.test(message.body) ||
            /Đỉnh/.test(message.body) || /đỉnh/.test(message.body) ||
            /Đáng yêu/.test(message.body) || /đáng yêu/.test(message.body)
        );
    }

    function haveOkWord(message) {
        return (
            /Ok/.test(message.body) || /ok/.test(message.body) ||
            /Oke/.test(message.body) || /oke/.test(message.body) ||
            /Âu key/.test(message.body) || /âu key/.test(message.body) ||
            /Âu kêy/.test(message.body) || /âu kêy/.test(message.body) ||
            /Âu kê/.test(message.body) || /âu kê/.test(message.body) ||
            /1/.test(message.body)
        );
    }

    function haveHello(message) {
        return (
            /Chào/.test(message.body) || /chào/.test(message.body) ||
            /Hello/.test(message.body) || /hello/.test(message.body) ||
            /Hi/.test(message.body) || /hi/.test(message.body) ||
            /Hey/.test(message.body) || /hey/.test(message.body)
        );
    }

    function callMe(message) {
        return (
            /Ê/.test(message.body) ||
            /Ee/.test(message.body) ||
            /Eh/.test(message.body) ||
            /ee/.test(message.body) ||
            /eh/.test(message.body) ||
            /ey/.test(message.body) ||
            /Ey/.test(message.body) ||
            /alo/.test(message.body) ||
            /Alo/.test(message.body) ||
            /Đâu rồi/.test(message.body) ||
            /đâu rồi/.test(message.body) ||
            (havePersionReplyMessage(message) && /ơi/.test(message.body))
        );
    }

    function askMySex(message) {
        return (
            /trai hay gái/.test(message.body) || /gái hay trai/.test(message.body) ||
            /nam hay nữ/.test(message.body) || /nữ hay nam/.test(message.body) ||
            /Giới tính/.test(message.body) || /giới tính/.test(message.body) ||
            /bê đê/.test(message.body) || /Bê đê/.test(message.body) ||
            / gay/.test(message.body) ||
            /Gay/.test(message.body)
        );
    }

    function tooShortQuestion(message) {
        return (
            message.body === "?" || message.body === "??" ||
            message.body === "???" || message.body === "????" ||
            message.body === "Gì" || message.body === "gì" ||
            message.body === "Gì?" || message.body === "gì?" ||
            message.body === "J?" || message.body === "j?" ||
            message.body === "J" || message.body === "j"
        );
    }

    function sayGoodBye(message) {
        return (
            /Tạm biệt/.test(message.body) || /tạm biệt/.test(message.body) ||
            /Bye/.test(message.body) || /bye/.test(message.body) ||
            /Bai/.test(message.body) || /bai/.test(message.body)
        );
    }

    function letMeOut(message) {
        return (
            /Lượn/.test(message.body) || /lượn/.test(message.body) ||
            /Cút/.test(message.body) || /cút/.test(message.body) ||
            /Chết đi/.test(message.body) || /chết đi/.test(message.body)
        );
    }

    function tks(message) {
        return (
            /Thank/.test(message.body) || /thank/.test(message.body) ||
            /Cảm ơn/.test(message.body) || /cảm ơn/.test(message.body) ||
            /Cám ơn/.test(message.body) || /cám ơn/.test(message.body) ||
            /Tks/.test(message.body) || /tks/.test(message.body) ||
            /Thăn kiu/.test(message.body) || /thăn kiu/.test(message.body)
        );
    }

    function canLoi(message) {
        return (
            /Quỳ/.test(message.body) || /quỳ/.test(message.body) ||
            /Cạn lời/.test(message.body) || /cạn lời/.test(message.body) ||
            /Hết lời/.test(message.body) || /hết lời/.test(message.body) ||
            /Khô lời/.test(message.body) || /khô lời/.test(message.body)
        );
    }

    function shutUp(message) {
        return (
            /Im mồm/.test(message.body) || /im mồm/.test(message.body) ||
            /Im đi/.test(message.body) || /im đi/.test(message.body) ||
            message.body === "im" || message.body === "Im" ||
            /Im mẹ/.test(message.body) || /im mẹ/.test(message.body) ||
            /Im/.test(message.body)
        );
    }

    function whatYouDoing(message) {
        return (
            /Làm gì đấy/.test(message.body) || /làm gì đấy/.test(message.body) ||
            /Lgi đấy/.test(message.body) || /lgi đấy/.test(message.body)
        );
    }

    function whatIsYourName(message) {
        return (
            (/tên/.test(message.body) || /Tên/.test(message.body)) &&
            /gì/.test(message.body) &&
            havePersionSentMessage(message)
        );
    }

    function whatQuestion(message) {
        return (
            /Cái gì/.test(message.body) || /cái gì/.test(message.body) ||
            /Gì/.test(message.body) || /gì/.test(message.body)
        );
    }

    function wantMeSing(message) {
        return (
            /Hát/.test(message.body) || /hát/.test(message.body)
        );
    }

    function isBeauty(message) {
        return (
            /Xinh"/.test(message.body) || /xinh/.test(message.body) ||
            /Đẹp/.test(message.body) || /đẹp/.test(message.body) ||
            /Quyến rũ/.test(message.body) || /quyễn rũ/.test(message.body)
        );
    }

    function haveNY(message) {
        return (
            /Người yêu/.test(message.body) || /người yêu/.test(message.body) ||
            /Ny/.test(message.body) || /ny/.test(message.body)
        );
    }

    function haveNYC(message) {
        return (
            /Người yêu cũ/.test(message.body) || /người yêu cũ/.test(message.body) ||
            /Nyc/.test(message.body) || /nyc/.test(message.body) ||
            /Ny cũ/.test(message.body) || /ny cũ/.test(message.body)
        );
    }

    function sayMeCrazy(message) {
        return (
            /đồ điên/.test(message.body) || /bị điên/.test(message.body) ||
            /đồ hấp/.test(message.body) || /bị hấp/.test(message.body) ||
            /Đồ điên/.test(message.body) || /Bị điên/.test(message.body) ||
            /Đồ hấp/.test(message.body) || /Bị hấp/.test(message.body) ||
            /Điên/.test(message.body) || /Hấp/.test(message.body)
        );
    }

    function smile(message) {
        return (
            /Haha/.test(message.body) || /haha/.test(message.body) ||
            /Hihi/.test(message.body) || /hihi/.test(message.body) ||
            /hiho/.test(message.body) || /hiho/.test(message.body) ||
            /Hí hí/.test(message.body) || /hí hí/.test(message.body) ||
            message.body === "=))" || message.body === "=)))" ||
            message.body === "=))))" || message.body === "=)))))"
        );
    }

    function Lie(message) {
        return (
            /Xàm/.test(message.body) || /xàm/.test(message.body) ||
            /Xạo/.test(message.body) || /xạo/.test(message.body) ||
            /Phét/.test(message.body) || /phét/.test(message.body) ||
            (believe(message) && haveDeny(message))
        );
    }

    function notSure(message) {
        return (
            /Xem xét/.test(message.body) || /xem xét/.test(message.body) ||
            (haveDeny(message) && /chắc/.test(message.body)) || (haveDeny(message) && /Chắc/.test(message.body)) ||
            /Có thể/.test(message.body) || /có thể/.test(message.body) ||
            (haveDeny(message) && /biết/.test(message.body)) ||
            /Có lẽ/.test(message.body) || /có lẽ/.test(message.body)
        )
    }

    function dontUnderstand(message) {
        return (
            haveDeny(message) && /hiểu/.test(message.body) ||
            haveDeny(message) && /biết/.test(message.body) ||
            /Kb/.test(message.body) || /kb/.test(message.body)
        );
    }

    function supprise(message) {
        return (
            /Ồ/.test(message.body) || /ồ/.test(message.body) ||
            /Wow/.test(message.body) || /wow/.test(message.body) ||
            /Wtf/.test(message.body) || /wtf/.test(message.body)
        );
    }

    function believe(message) {
        return (
            /Tin/.test(message.body) || /tin/.test(message.body)
        );
    }

    function howMany(message) {
        return (
            /Bn/.test(message.body) || /bn/.test(message.body) ||
            /Bao nhiêu/.test(message.body) || /bao nhiêu/.test(message.body) ||
            /nhiêu/.test(message.body) || /Nhiêu/.test(message.body)
        );
    }

    function is4(message) {
        return (
            /Phò/.test(message.body) || /phò/.test(message.body) ||
            /Đĩ/.test(message.body) || /đĩ/.test(message.body) ||
            /Cave/.test(message.body) || /cave/.test(message.body) ||
            /4/.test(message.body) || /4/.test(message.body)
        );
    }

    function turnOff(message) {
        return (
            /Tắt/.test(message.body) || /tắt/.test(message.body) ||
            /Xóa/.test(message.body) || /xóa/.test(message.body)
        );
    }

    function letNow(message) {
        return (
            /Luôn/.test(message.body) || /luôn/.test(message.body) ||
            /Ngay/.test(message.body) || /ngay/.test(message.body)
        );
    }

    function myNameIs(message) {
        return (
            (/là/.test(message.body) || /tên/.test(message.body) || /Tên/.test(message.body)) && havePersionSentMessage(message)
        );
    }

    function borrowMoney(message) {
        return (
            /Tiền/.test(message.body) || /tiền/.test(message.body) ||
            /Vay/.test(message.body) || /vay/.test(message.body)
        );
    }

    function watchMovie(message) {
        return (
            /Phim/.test(message.body) || /phim/.test(message.body)
        );
    }

    function haveContinue(message) {
        return (/tiếp/.test(message.body) || /Tiếp/.test(message.body));
    }

    function handsome(message) {
        return /đẹp trai/.test(message.body) || /Đẹp trai/.test(message.body);
    }

    function wordStupid(message) {
        return /ngu/.test(message.body);
    }

    function tellFunStory(message) {
        return (
            haveTalkWord(message) &&
            (/cười/.test(message.body) || /hài/.test(message.body) || /vui/.test(message.body))
        );
    }

    function tellScaryStory(message) {
        return (
            haveTalkWord(message) &&
            (/ma/.test(message.body) || /kinh dị/.test(message.body) || /đáng sợ/.test(message.body))
        );
    }

    function tellStory(message) {
        return (
            haveTalkWord(message) && (/chuyện/.test(message.body) || /truyện/.test(message.body))
        );
    }

    function chickenAndEggs(message) {
        return (
            (/Gà/.test(message.body) || /gà/.test(message.body)) &&
            /trứng/.test(message.body) && /có trước/.test(message.body)
        );
    }

    var threadID;
    api.listen(function callback(err, message) {
        if (message) {
            threadID = message.threadID;
        }

        if (!(message && typeof message != "undefined")) {
            var randomNumber = parseInt(Math.random() * 2, 10);
            if (randomNumber === 1) {
                var msg = {
                    body: "",
                    sticker: 1433995916873384
                };
                setTimeout(function () {
                    api.sendMessage(msg, threadID);
                }, 500);
                throw new Error('Run out of time');
                return;
            } else {
                // noinspection JSAnnotator
                var msg = {
                    body: "",
                    sticker: 131715190756422
                };
                setTimeout(function () {
                    api.sendMessage(msg, threadID);
                }, 500);
                throw new Error('Run out of time');
                return;
            }
        } else {
            threadID = message.threadID;
            //WORD "Im mồm, im đi"                                                          random 3
            if (shutUp(message)) {
                var randomNumber = parseInt(Math.random() * 3, 10);
                switch (randomNumber) {
                    case 1:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Nếu sự im lặng của tớ làm cậu vui hơn", message.threadID);
                        setTimeout(function () {
                            api.sendMessage("Thì tớ vẫn đ im đâu", message.threadID);
                        }, 500);
                        setTimeout(function () {
                            api.sendMessage("Kệ cậu :)", message.threadID);
                        }, 1000);
                        return;
                        break;
                    case 2:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Tớ đẻ ra để nói mà cậu lại bảo tớ im", message.threadID);
                        setTimeout(function () {
                            api.sendMessage("Khác gì cắt luôn chim của tớ đi :<", message.threadID);
                        }, 500);
                        return;
                        break;
                    default:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Vâng, cậu bảo tớ im thì tớ im.", message.threadID);
                        return;
                        break;
                }
            }

            //WORD "Luôn"                                                                   random 2
            else if (letNow(message)) {
                var randomNumber = parseInt(Math.random() * 2, 10);
                switch (randomNumber) {
                    case 1:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Luôn và ngay, lên nóc nhà là bắt con gà", message.threadID);
                        return;
                        break;
                    default:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Từ từ thôi", message.threadID);
                        setTimeout(function () {
                            api.sendMessage("Tớ hơi ngại", message.threadID);
                        }, 500);
                        return;
                        break;
                }
            }

            //WORD "Ngoan"                                                                  random 2
            else if (!haveDeny(message) && (/Ngoan/.test(message.body) || /ngoan/.test(message.body))) {
                var randomNumber = parseInt(Math.random() * 2, 10);
                switch (randomNumber) {
                    case 1:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Phải ngoan hơn nữa cơ", message.threadID);
                        return;
                        break;
                    default:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Ngoan là tốt", message.threadID);
                        setTimeout(function () {
                            api.sendMessage("Thế bé muốn thưởng gì nào?", message.threadID);
                        }, 500);
                        return;
                        break;
                }
            }

            //WORD "K Ngoan"                                                                random 2
            else if (haveDeny(message) && (/Ngoan/.test(message.body) || /ngoan/.test(message.body))) {
                var randomNumber = parseInt(Math.random() * 2, 10);
                switch (randomNumber) {
                    case 1:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Hư thế này tí ra gầm cầu ngủ nha", message.threadID);
                        setTimeout(function () {
                            pi.sendMessage("Ý tôi là tôi ra :)", message.threadID);
                        }, 2000);
                        return;
                        break;
                    default:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Từ nay chúng ta không còn quen nhau :)", message.threadID);
                        setTimeout(function () {
                            api.sendMessage("Thế bé muốn thưởng gì nào?", message.threadID);
                        }, 500);
                        return;
                        break;
                }
            }

            //WORD "Tắt"                                                                    random 1
            else if (turnOff(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Nếu cậu muốn làm cho tớ sập luôn, cậu có thể gửi một nhãn dán", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Nhưng Đạt nó phải bật lại, tội lắm đó...", message.threadID);
                }, 1000);
                return;
            }

            //"Tớ tên"                                                                      random 1
            else if (myNameIs(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Ồ, rất vui được gặp cậu", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Tên cậu đẹp thật đấy", message.threadID);
                }, 1000);
                return;
            }

            //Vay tiền                                                                      random 1
            else if (borrowMoney(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Thằng cho vay là thằng dại, thằng trả lại là thằng ngu", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Nhưng vì cậu, tớ nguyện vừa dại vừa ngu", message.threadID);
                }, 500);
                setTimeout(function () {
                    api.sendMessage("Đọc số tài khoản đi", message.threadID);
                }, 1000);
                return;
            }

            //WORD "Làm gì đấy, lgi đấy "                                                   random 3
            else if (whatYouDoing(message)) {
                var randomNumber = parseInt(Math.random() * 3, 10);
                switch (randomNumber) {
                    case 1:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Tớ đang làm gì á", message.threadID);
                        setTimeout(function () {
                            api.sendMessage("Bí mật mới tạo nên sự quyến rũ", message.threadID);
                        }, 500);
                        return;
                        break;
                    case 2:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Còn làm gì nữa?", message.threadID);
                        setTimeout(function () {
                            api.sendMessage("Tất nhiên là đang nhắn tin với cậu rồi", message.threadID);
                        }, 500);
                        return;
                        break;
                    default:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Tớ đang nhắn tin với cô gái xinh đẹp nhất đây nè <3", message.threadID);
                        return;
                        break;
                }
            }

            //WORD "Tao tên gì"                                                             random 1
            else if (whatIsYourName(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                setTimeout(function () {
                    api.sendMessage("À mà cậu tên là gì thế nhỉ?", message.threadID);
                }, 1000);
                api.sendMessage("Sao tớ quên được tên cậu chứ, tất nhiên là tớ biết rồi", message.threadID);
                return;
            }

            //WORD "Không hiểu"                                                             random 3
            else if (dontUnderstand(message)) {
                var randomNumber = parseInt(Math.random() * 3, 10);
                switch (randomNumber) {
                    case 1:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Không sao", message.threadID);
                        setTimeout(function () {
                            api.sendMessage("Hồi xưa tớ cũng từng ngu như cậu =))", message.threadID);
                        }, 500);
                        return;
                        break;
                    case 2:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Thế mà cũng không hiểu à?", message.threadID);
                        setTimeout(function () {
                            api.sendMessage("Tớ cũng có hiểu gì đâu", message.threadID);
                        }, 500);
                        return;
                        break;
                    default:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Cậu được cái ngu giống hệt mìn", message.threadID);
                        return;
                        break;
                }
                return;
            }

            //WORD "Cái gì?"                                                                random 2
            else if (whatQuestion(message)) {
                var randomNumber = parseInt(Math.random() * 2, 10);
                switch (randomNumber) {
                    case 1:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Hơm có gì hihi", message.threadID);
                        return;
                        break;
                    default:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Cái gì là cái gì là cái gì?", message.threadID);
                        return;
                        break;
                }
            }

            //WORD "Phim"                                                                   random 1
            else if (watchMovie(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                setTimeout(function () {
                    api.sendMessage("Phim ấy ấy thì cho mìn xem với nhaa", message.threadID);
                }, 2000);
                api.sendMessage("Xem phim gì đó?", message.threadID);
                return;
            }

            //WORD "Tiếp"                                                                   random 1
            else if (haveContinue(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                setTimeout(function () {
                    api.sendMessage("Tôi dỗi rồi :)", message.threadID);
                }, 2000);
                api.sendMessage("Không", message.threadID);
                return;
            }

            //WORD "hát"                                                                    random 3
            else if (wantMeSing(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                // noinspection JSDuplicatedDeclaration
                var numberRandom = (Math.random() * 4);
                if (numberRandom <= 1) {
                    api.sendMessage("Qī nían liǎo què bùjìan zhè yī yǔ dàobíe\n" +
                        "zhè sìzhōng yě zài wú yī duǒ míng huā\n" +
                        "wéi qǔ zhè yīdiǎn pútí a\n" +
                        "wǒ wèn wǒ fú a\n" +
                        "nǐ wèihé dù wǒ bùdù tā ne\n" +
                        "wèihé a\n" +
                        "wǒ qían jǐ shì zhǒng xìa\n" +
                        "bùdùan de shì qiāngùa\n" +
                        "xiǎosēng húitóule ma\n" +
                        "sòng jīng shēng bìan shāyǎ\n" +
                        "zhè sìxìa zài wú tā\n" +
                        "pútí bùdù tā\n" +
                        "jǐ juǎn jīng wén nán líu\n" +
                        "zhè mǎn yùan de míng huā\n" +
                        "nǐ líkāi zhège jiā\n" +
                        "ài hèn dōu wú chù sǎ\n" +
                        "hái néng húitóule ma\n" +
                        "kàn nǐ wéixìao liǎnjía\n" +
                        "zěn néng tuō xìa jiāshā\n" +
                        "lái hái nǐ yīgè jiā\n" +
                        "wèihé dù wǒ bùdù tā\n" +
                        "wǒ háishì nán gǎi xīn júe\n" +
                        "yě bùjìan yījù dàobíe\n" +
                        "xìanzài sì wài shénme jìjíe\n" +
                        "zài wú chéng shuāng húdíe\n" +
                        "wǒ zǎoyǐ guīyī wǒ fú\n" +
                        "dùanle chénshì zhízhúo\n" +
                        "nǐ zhǒng mǎn sì míng huā xìan fó\n" +
                        "nán gǎi fú jiā pǔtúo\n" +
                        "wǒ bù dǒng shénme chényúan\n" +
                        "nà zhǐ zhī yǒu nǐ hěn tían\n" +
                        "nǐ yǐ bùzài zhège zhuāngyúan\n" +
                        "wǒ dǒngle yǎnlèi hěn xían\n" +
                        "chén zhōng bù zài zhāo mù\n" +
                        "zhè línghún zěnme chāodù\n" +
                        "wǒ wàngjì qíanchén zǒugùo de lù\n" +
                        "ýihàn méi néng zhàogù\n" +
                        "wǒ bù zài xī shǒu chén guī\n" +
                        "zài wú míng huā fēnfēi\n" +
                        "cái tǐhùi zhè xiāngsī chéng duī\n" +
                        "yǐjīng wúfǎ zài zhuī\n" +
                        "nǐ sǐ zài hú pàn biānsài\n" +
                        "zěn néng wúqíng wú ài\n" +
                        "wǒ láishì bù zài wèi sēng\n" +
                        "hóng gàitou zhǐ wèi nǐ dài\n" +
                        "zhè gàitou zhǐ wèi nǐ dài\n" +
                        "zhè fēng er hái zài guā\n" +
                        "lùanle shéi de níanhúa\n" +
                        "tā líu qǐle zhǎng fā\n" +
                        "shōu qǐ muỳú ba\n" +
                        "pútí xìa zài wú tā\n" +
                        "yòu dùgùo jǐ gè xìa\n" +
                        "yǎnjīng hái hóng ma\n" +
                        "tā yǐjīng bù zài la\n" +
                        "chén zhōng zài qiāo jǐ xìa\n" +
                        "bùdù shìjiān fánhuā\n" +
                        "wǒ yě dītóu xìaozhe\n" +
                        "zài bu jìan nǐ zhǎng fā\n" +
                        "xìao wèn fózǔ a\n" +
                        "dù qiān bǎi wàn rénjiā\n" +
                        "wèihé dù wǒ bùdù tā\n" +
                        "zhè fēng er hái zài guā\n" +
                        "lùanle shéi de níanhúa\n" +
                        "tā líu qǐle zhǎng fā\n" +
                        "shōu qǐ muỳú ba\n" +
                        "pútí xìa zài wú tā\n" +
                        "yòu dùgùo jǐ gè xìa\n" +
                        "yǎnjīng hái hóng ma\n" +
                        "tā yǐjīng bù zài la\n" +
                        "chén zhōng zài qiāo jǐ xìa\n" +
                        "bùdù shìjiān fánhuā\n" +
                        "wǒ yě dītóu xìaozhe\n" +
                        "zài bu jìan nǐ zhǎng fā\n" +
                        "xìao wèn fózǔ a\n" +
                        "dù qiān bǎi wàn rénjiā\n" +
                        "wèihé dù wǒ bùdù tā", message.threadID);
                } else if (numberRandom > 1 && numberRandom <= 2) {
                    api.sendMessage("Oke, đơn giản mà.", message.threadID);
                    setTimeout(function () {
                        api.sendMessage("Nhìn vào hư không ngước vô định vào xa xăm\n" +
                            "Thở dài tiếc nuối biết bao ân hận với một người\n" +
                            "Nặng lời nhau đau vỡ trái tim, người tổn thương đi rồi\n" +
                            "Nhận ra phải sống xa anh chẳng dễ dàng, chẳng dễ dàng.\n" +
                            "Ong đã biết cần hoa lấy mật\n" +
                            "Biết đợi nắng sưởi ấm mỗi ngày\n" +
                            "Em giờ không trẻ con như trước\n" +
                            "Sẽ không để lạc nhau dù một bước.", message.threadID);
                    }, 1000);
                } else {
                    api.sendMessage("Mình thích mèo lắm ", message.threadID);
                    setTimeout(function () {
                        api.sendMessage("Mình bắt chước loài mèo kêu nha\n" +
                            "Kêu cùng anh méo meo meo meooo ", message.threadID);
                    }, 1000);
                }
                return;
            }

            //WORD "T có xinh không?"                                                       random 3
            else if (isBeauty(message) && havePersionSentMessage(message)) {
                var numberRandom = Math.random() * 3;
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                if (numberRandom <= 1) {
                    api.sendMessage("Cậu không xinh lắm", message.threadID);
                    setTimeout(function () {
                        api.sendMessage("Nhưng cậu là thiên thần trong lòng tớ <3", message.threadID);
                    }, 1000);
                } else if (numberRandom > 1 && numberRandom <= 2) {
                    api.sendMessage("Trên đời này ngoài cậu ra, tớ chẳng thấy cô gái nào xinh nữa cả", message.threadID);
                } else {
                    api.sendMessage("Gương kia ngự ở trên tường", message.threadID);
                    setTimeout(function () {
                        api.sendMessage("Thế gian ai đẹp bằng bạn của ta?", message.threadID);
                    }, 1000);
                }
                return;
            }

            //WORD "Tớ thích cậu"                                                           random 1
            else if (havePersionReplyMessage(message) && haveLikeWord(message) && havePersionSentMessage(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Chào cậu, tớ là Ngô Quốc Đụt, trợ lý của Đạt.", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Tớ thì không thích cậu đâu nhưng thằng Đạt thì chắc là có đó <3", message.threadID);
                }, 1000);
                return;
            }

            //WORD "Không thích"                                                            random 1
            else if (haveDeny(message) && haveLikeWord(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Cậu không thích nhưng tớ thích cậu <3", message.threadID);
                return;
            }

            //WORD SHORT QUESTION                                                           random 1
            else if (tooShortQuestion(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Gì mà lạnh lùng zậy trời :<", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Nói dài dài tí nào :((", message.threadID);
                }, 500);
                return;
            }

            //ASK MY SEX                                                                    random 1
            else if (askMySex(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Ít nhất 50% là đàn ông nhé =))", message.threadID);
                return;
            }

            //WORD "Đẹp trai"                                                               random 1
            else if (handsome(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Thằng Đạt bảo tớ là ngoài nó ra ai cũng xấu trai hếttttt!!", message.threadID);
                return;
            }

            //WORD "ngu"                                                                    random 1
            else if (wordStupid(message)) {
                var randomNumber = parseInt(Math.random() * 2, 10);
                switch (randomNumber) {
                    case 1:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Tớ chỉ hơi hơi thooiiii", message.threadID);
                        return;
                        break;
                    default:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Tớ thông minh mỗi trong lúc đi thi, còn lại ngu liên tục", message.threadID);
                        return;
                        break;
                }
                return;
            }

            //WORD "Người yêu cũ"                                                           random 1
            else if (haveNYC(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Tỉnh ngộ đi đồ điên", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Vất cái chữ nyc ra khỏi đầu điiiii", message.threadID);
                }, 500);
                return;
            }

            //WORD "Người yêu"                                                              random 1
            else if (haveNY(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Sự nghiệp còn chưa thành, nghĩ gì đến chuyện nữ nhân?", message.threadID);
                return;
            }

            //Call Me                                                                       random 3
            else if (callMe(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                var numberRandom = Math.random() * 4;
                if (numberRandom <= 1) {
                    api.sendMessage("Ơiii", message.threadID);
                } else if (numberRandom <= 2) {
                    api.sendMessage("??", message.threadID);
                } else {
                    api.sendMessage("Anh đây", message.threadID);
                }
                return;
            }

            //WORD "Kể chuyện cười"                                                         random 1
            else if (tellFunStory(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Cần gì kể chuyện cười khi cuộc đời cậu chính là một bản hài kịch rồi", message.threadID);
                return;
            }

            //Kể chuyện ma                                                                  random 2
            else if (tellScaryStory(message)) {
                var randomNumber = parseInt(Math.random() * 2, 10);
                switch (randomNumber) {
                    case 1:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Kali Bari Canxi Natri Magie Al Mangan Zn Crom Fe Niken Sn Pb Hydro Cu Hg Ag Pt Au", message.threadID);
                        return;
                        break;
                    default:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Cho hình chóp tứ giác đều SABCD, có đáy là hình vuông ABCD cạnh a, Mặt phẳng SBC tạo với đáy một góc 30 độ. Khoảng cách từ S đến đường thẳng AD là 2a. I là trung điểm của AB, tính khoảng cách SI", message.threadID);
                        return;
                        break;

                }
            }

            //Kể chuyện thường                                                              random 2
            else if (tellStory(message)) {
                var randomNumber = parseInt(Math.random() * 2, 10);
                switch (randomNumber) {
                    case 1:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Tại 1 chuyên mục Rao Vặt: \"Nam, 20 tuổi, cao 1.72m, nặng 53 kg còn độc thân. Thành đạt, đẹp trai, khỏe mạnh, thông minh, sở hữu hai xe BMW, một thuyền buồm, biệt thự ở Hawaii, hai nhà mặt tiền khu trung tâm. Chỉ có mỗi tật hay nói xạo là chưa chữa được\".", message.threadID);
                        return;
                        break;
                    default:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Một cậu bé viết: \"Thưa ông già Noel, ông gửi cho cháu một đứa em gái xinh xắn ông nhé!\" Vài ngày sau, cậu nhận được thư trả lời của ông già Noel: \"Được thôi. Cháu hãy gửi mẹ cháu đến cho ông nhé!\"", message.threadID);
                        return;
                        break;

                }
            }

            //Nói bậy                                                                       random 3
            else if (haveBullShitWord(message)) {
                var randomNumber = parseInt(Math.random() * 3, 10);
                switch (randomNumber) {
                    case 1:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Eo uiiiii", message.threadID);
                        setTimeout(function () {
                            api.sendMessage("Cậu bậy thế?", message.threadID);
                        }, 1000);
                        return;
                        break;
                    case 2:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Nghiệp tụ vành môi", message.threadID);
                        setTimeout(function () {
                            api.sendMessage("Răng môi lẫn lộn?", message.threadID);
                        }, 1000);
                        return;
                        break;
                    default:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Nói bậy kém sang lắm", message.threadID);
                        setTimeout(function () {
                            api.sendMessage("Hay chúng mình cùng làm bậy đi?", message.threadID);
                        }, 1000);
                        return;
                        break;
                }
            }

            //WORD "Đồ điên"                                                                random 2
            else if (sayMeCrazy(message)) {
                var randomNumber = parseInt(Math.random() * 2, 10);
                switch (randomNumber) {
                    case 1:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Tớ chỉ hơi ngáo ngáo tí tí thoii", message.threadID);
                        return;
                        break;
                    default:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Tớ điên nhưng được cái rất hồn nhiên", message.threadID);
                        return;
                        break;
                }
            }

            //WORD "Ngáo"                                                                   random 2
            else if (/ngáo/.test(message.body)) {
                var randomNumber = parseInt(Math.random() * 2, 10);
                switch (randomNumber) {
                    case 1:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Hihi, hãy gọi tớ là Ngáo, tớ bị ngáo nặng -.-", message.threadID);
                        return;
                        break;
                    default:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Chúa cho đàn ông bọn tớ 2 cái đầu", message.threadID);
                        setTimeout(function () {
                            api.sendMessage("Nhưng lại chỉ cung cấp đủ máu để hoạt động một lúc một cái", message.threadID);
                        }, 500);
                        setTimeout(function () {
                            api.sendMessage("Và tớ luôn dùng máu để hoạt động cái đầu ở dưới :))", message.threadID);
                        }, 1000);
                        return;
                        break;
                }
            }

            //Blame me                                                                      random 2
            else if (blameMe(message)) {
                var randomNumber = parseInt(Math.random() * 2, 10);
                switch (randomNumber) {
                    case 1:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Sự ngốc nghíc của mình làm bạn vui hơn là tốt rồi :<", message.threadID);
                        return;
                        break;
                    default:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Bị chê nhiều quá cũng thành quen", message.threadID);
                        setTimeout(function () {
                            api.sendMessage("Tự nhiên mà không bị chê nữa, chắc ăn không ngon mất", message.threadID);
                        }, 500);
                        return;
                        break;
                }
            }

            //WORD "Thì sao"                                                                random 1
            else if (/thì sao/.test(message.body) || /Thì sao/.test(message.body)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Thì thôi", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Bỏ về quê trồng rau nuôi cá", message.threadID);
                }, 1000);
                return;
            }

            //WORD "Có phải Đạt không"                                                      random 1
            else if (/phải/.test(message.body) && (havePersionReplyMessage(message))) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Không, Đạt đi ỉa rồi, tôi là Ngô Quốc Đụt - trợ lý của cậu ấy", message.threadID);
                return;
            }

            //Get me out                                                                    random 2
            else if (letMeOut(message)) {
                var randomNumber = parseInt(Math.random() * 2, 10);
                switch (randomNumber) {
                    case 1:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Cậu đuổi tớ thì tớ còn mặt mũi nào sống trên đời này nữa :<", message.threadID);
                        return;
                        break;
                    default:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Thế thì trả dép tôi về :)", message.threadID);
                        return;
                        break;
                }
            }

            //WORD "chờ"                                                                    random 1
            else if (/chờ/.test(message.body) || /Chờ/.test(message.body)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Xin lỗi vì đã để cậu phải chờ :< tớ sẽ cố hết sức", message.threadID);
                return;
            }

            //WORD "OK"                                                                     random 2
            else if (haveOkWord(message)) {
                var randomNumber = parseInt(Math.random() * 2, 10);
                switch (randomNumber) {
                    case 1:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Mỗi lần nhận tin nhắn kiểu này, dù rất muốn nhắn tiếp nhưng cạn ý tưởng mất rồi...", message.threadID);
                        return;
                        break;
                    default:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Okela", message.threadID);
                        return;
                        break;
                }
            }

            //Con gà có trước hay qủa trứng có trước                                        random 1
            else if (chickenAndEggs(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Mình chỉ biết là gà vài trăm một con, còn trứng hai nghìn rưỡi một quả", message.threadID);
                return;
            }

            //Deny + Commannded Me                                                          random 1
            else if (haveDeny(message) && commendedMe(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Tớ tệ đến như thế", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Thì cậu cứ bốc phét 1 câu cho tớ vui đi mà :<", message.threadID);
                }, 500);
                return;
            }

            //CommendedMe                                                                   random 1
            else if (commendedMe(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Mỗi lần được khen là tớ lại nứng hết cả lên ý", message.threadID);
                return;
            }

            //WORD "sao"                                                                    random 1
            else if (/sao/.test(message.body) || /Sao/.test(message.body)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Sao với trăng cái gì?", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Bầu trời của tớ chỉ có mình cậu thooiii", message.threadID);
                }, 1000);
                return;
            }

            //WORD "tạm được"                                                               random 1
            else if (/tạm được/.test(message.body) || /Tạm được/.test(message.body)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Chỉ cần cậu nói tạm được thôi, tim tớ nhảy ra ngoài mất rồi nàyyyy", message.threadID);
                return;
            }

            //WORD "ăn cứt"                                                                 random 1
            else if (/ăn cứt/.test(message.body) || /Ăn cứt/.test(message.body)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Cứt và thịt chó là 2 món ưa thích của mình đó", message.threadID);
                return;
            }

            //Cám ơn                                                                        random 1
            else if (tks(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Hơm có gì", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Yêu cậu nhứt", message.threadID);
                }, 1000);
                return;
            }

            //Đang đâu đây                                                                  random 1
            else if ((/Đang/.test(message.body) || /đang/.test(message.body)) && (/đâu/.test(message.body) || /Đâu/.test(message.body))) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Đạt thì nó đang đi ỉa rùi", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Còn mình đang ngồi nhắn tin với người đáng yêu nhất quả đất này đó", message.threadID);
                }, 1000);
                return;
            }

            //Haha                                                                          random 1
            else if (smile(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Cười gì mà cười", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Bộ tớ buồn cười lắm hả?", message.threadID);
                }, 1000);
                return;
            }

            //Hỏi tuổi                                                                      random 1
            else if (havePersionReplyMessage(message) && /tuổi/.test(message.body)) {
                var createDay = new Date(2019, 5, 13, 0, 0, 0, 0);
                var today = new Date();
                var ageMilisecond = today.getTime() - createDay.getTime();
                var theAnswer = parseInt(ageMilisecond / (1000 * 60 * 60 * 24), 10);
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Tớ mới được tạo ra từ hôm 13/06/2019 thôi", message.threadID);
                api.sendMessage("Có nghĩa là tớ được " + (theAnswer + 1) + " ngày tuổi rồi", message.threadID);
                return;
            }

            //Tớ ghét cậu                                                                   random 1
            else if (havePersionReplyMessage(message) && /ghét/.test(message.body) || /Ghét/.test(message.body)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Ghét thật đó à :<", message.threadID);
                return;
            }

            //Xàm                                                                           random 1
            else if (Lie(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Cậu thấy vui là được! Tớ nói xàm nói xạo nó quen rùi =))", message.threadID);
                return;
            }

            //Không rảnh                                                                    random 1
            else if (haveDeny(message) && /rảnh/.test(message.body)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Không rảnh thì thôi, tớ sẽ ở đây đợi đến khi nào cậu rảnh", message.threadID);
                return;
            }

            //WORD "Buồn"                                                                   random 1
            else if ((/buồn/.test(message.body) || /Buồn/.test(message.body) && havePersionSentMessage(message)) ||
                (havePersionSentMessage(message) && /vui/.test(message.body) && haveDeny(message))) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Cậu buồn thì tớ còn buồn hơn đó :<", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Hay là mình ra ngoài ăn gì đó đi", message.threadID);
                }, 500);
                setTimeout(function () {
                    api.sendMessage("Thành hai con lợn là không còn buồn nữa đâu", message.threadID);
                }, 1000);
                return;
            }

            //Dạy lại con BOT ngu này đi                                                    random 1
            else if (/dạy/.test(message.body) || /Dạy/.test(message.body)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Thằng Đạt nó lười bome ra ý", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Nó làm ra tớ vì nó lười rep tin nhắn của người khác mà...", message.threadID);
                }, 500);
                setTimeout(function () {
                    api.sendMessage("Để tớ gọi nó  dậy làm, cậu chờ tẹo nha", message.threadID);
                }, 1000);
                return;
            }

            //WORD "Nứng"                                                                   random 2
            else if (/nứng/.test(message.body) || /Nứng/.test(message.body)) {
                var randomNumber = parseInt(Math.random() * 2, 10);
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                switch (randomNumber) {
                    case 1:
                        api.sendMessage("Nứng quá, nứng quáaa", message.threadID);
                        setTimeout(function () {
                            api.sendMessage("3 giây tự hủy bắt đầu", message.threadID);
                        }, 500);
                        setTimeout(function () {
                            api.sendMessage("3...2...1...", message.threadID);
                        }, 1000);
                        setTimeout(function () {
                            api.sendMessage("Bùm, tớ vẫn ở đây với cậu nè", message.threadID);
                        }, 1500);
                        return;
                        break;
                    case 2:
                        api.sendMessage("Tớ vẫn luôn nứng mà =))", message.threadID);
                        break;
                }
            }

            //WORD "Cứt"                                                                    random 1
            else if (/cứt/.test(message.body) || /Cứt/.test(message.body) || /ỉa/.test(message.body)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Cứt là một kiệt tác nghệ thuật", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Còn thằng Đạt đang cố để trở thành một nghệ nhân", message.threadID);
                }, 1000);
                return;
            }

            //Thế cơ à                                                                      random 1
            else if (/cơ à/.test(message.body)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Chứ còn gì nữa", message.threadID);
                return;
            }

            //Mày có biết không?                                                            random 1
            else if (/có biết/.test(message.body) || /Có biết/.test(message.body)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Biết thì tớ cũng biết, nhưng mà nói ra bị ăn đấm vỡ mồm như chơi...", message.threadID);
                return;
            }

            //WORD "Thật"                                                                   random 2
            else if (/Thật/.test(message.body) || /thật/.test(message.body)) {
                var randomNumber = parseInt(Math.random() * 2, 10);
                switch (randomNumber) {
                    case 1:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Sự thật thì thường rất đau lòng mà :<", message.threadID);
                        return;
                        break;
                    default:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Không tớ nói đùa đấy =))", message.threadID);
                        return;
                        break;
                }
            }

            //Đi ngủ đi                                                                     random 1
            else if (/đi ngủ/.test(message.body) || /Đi ngủ/.test(message.body)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Cậu ngủ đi, tớ sẽ chờ ở đây đề phòng cậu tỉnh giấc lúc đêm khuya", message.threadID);
                return;
            }

            //Tao có làm gì đâu                                                             random 1
            else if (/đâu/.test(message.body) || /Đâu/.test(message.body)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Còn cãi, sự thật nó lù lù ra đấy rồi ý", message.threadID);
                return;
            }

            //Lêu lêu                                                                       random 1
            else if (/lêu/.test(message.body) || /Lêu/.test(message.body)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Mình tự ái mỉnh bỏ về đấy", message.threadID);
                return;
            }

            //WORD "ăn"                                                                     random 1
            else if (/ăn/.test(message.body) || /Ăn/.test(message.body)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Tớ chỉ muốn ăn cậu thôi", message.threadID);
                return;
            }

            //WORD "Quên"                                                                   random 1
            else if (/quên/.test(message.body) || /Quên/.test(message.body)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Ngu chứ quên cái gì :)", message.threadID);
                return;
            }

            //WORD "Được"                                                                   random 1
            else if (/được/.test(message.body) || /Được/.test(message.body)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Quá được đi chứ", message.threadID);
                return;
            }

            //Have Hello                                                                    random 1
            else if (haveHello(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Chào bạn, tôi là Ngô Quốc Đụt, trợ lý của Đạt", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Hiện tại Đạt đi ỉa mất rùi, nên tôi sẽ ở đây nói chuyện với bạn", message.threadID);
                }, 500);
                return;
            }

            //Say Good bye                                                                  random 1
            else if (sayGoodBye(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Baiii, rất vui được trò chuyện cùng bạn", message.threadID);
                return;
            }

            //Cạn lời                                                                       random 1
            else if (canLoi(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Cái đồ nhạt nhẽo này", message.threadID);
                return;
            }

            //Deny                                                                          random 1
            else if (haveDeny(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Không gì mà không", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Ngoan đi thì cái gì cũng có", message.threadID);
                }, 500);
                return;
            }

            //Have Persion Sent Message                                                     random 1
            else if (havePersionSentMessage(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Ngu ngốc như thế, không cậu thì là tớ chắc", message.threadID);
                return;
            }

            //Have Persion Reply Message                                                    random 1
            else if (havePersionReplyMessage(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Đúng rồi", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Ngoài tớ ra, chẳng ai làm được việc đó cả", message.threadID);
                }, 500);
                return;
            }

            //Not Sure                                                                      random 1
            else if (notSure(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Quyết đoán lên đi chứ", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Cậu không quyết được thì để tớ quyết", message.threadID);
                }, 500);
                setTimeout(function () {
                    api.sendMessage("Triển luôn thôi", message.threadID);
                }, 1000);
                return;
            }

            //Icon :)                                                                       random 1
            else if (message.body === ":)" || message.body === ":))" || message.body === ":)))" || message.body === ":))))") {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Tớ rất ghét cái icon :) nhé", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Cậu dùng cái gì đáng eo hơn điiii", message.threadID);
                }, 1000);
                return;
            }

            //À                                                                             random 1
            else if (/À/.test(message.body) || /à/.test(message.body)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Giờ mới hiểu à", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Thật là ngốc nghíc quá đi mà", message.threadID);
                }, 500);
                return;
            }

            //Supprise                                                                      random 1
            else if (supprise(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Bất ngờ quá ha", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Cứ nói chuyện với tớ, cuộc sống này còn đầy dãy những điều bất ngờ chờ cậu khám phá đó", message.threadID);
                }, 500);
                return;
            }

            //Ngon                                                                          random 1
            else if (/Ngon/.test(message.body) || /ngon/.test(message.body)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Cậu ngon thật", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Nhưng không phải gu của tớ :<", message.threadID);
                }, 500);
                return;
            }

            //Lười                                                                          random 1
            else if (/Lười/.test(message.body) || /lười/.test(message.body)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Cậu thì không biết thế nào", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Chứ thằng Đạt thì lười đ chịu đc ý :<", message.threadID);
                }, 500);
                return;
            }

            //Vứt                                                                           random 1
            else if (/Vứt/.test(message.body) || /vứt/.test(message.body)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Tớ được nhặt từ bãi rác về mà", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Cậu định vứt tớ lại đó à :<", message.threadID);
                }, 500);
                return;
            }

            //Tin                                                                           random 1
            else if (believe(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Cám ơn vì sự tin tưởng", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Tớ sẽ nỗ lực hết mình", message.threadID);
                }, 500);
                return;
            }

            //Tin                                                                           random 1
            else if (howMany(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Cái đó bao nhiêu tớ không biết", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Nhưng tình cảm tớ dành cho cậu nhiều như sao trên bầu trời vậy", message.threadID);
                }, 500);
                setTimeout(function () {
                    api.sendMessage("Mà bầu trời của tớ là cậu mà nhỉ?", message.threadID);
                }, 1000);
                return;
            }

            //Đi                                                                            random 1
            else if (/đi/.test(message.body) || /Đi/.test(message.body)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Nếu có người rủ tớ đi chơi", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Lại còn được bao nữa thì tội gì mà không đi chứ", message.threadID);
                })
                return;
            }

            //WORD "Thôi"                                                                   random 1
            else if (message.body === "Thôi" || /thôi/.test(message.body)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Thôi cái gì mà thôi, nữa đii", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Kimochi kimochiii", message.threadID);
                }, 1000);
                return;
            }

            //WORD "."                                                                      random 1
            else if (message.body === ".") {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Tôi là trò đùa cho cô Test đó à :)", message.threadID);
                setTimeout(function () {
                    api.sendMessage("Thôi test gì test đi", message.threadID);
                }, 500);
                return;
            }

            //WORD "Thôi"                                                                   random 1
            else if (is4(message)) {
                console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                api.sendMessage("Cho dù là một con 4`, thì tớ cũng là một con 4` có tri thức nhé", message.threadID);
                return;
            }

            //default                                                                       random 5
            else if (message.body) {
                var randomNumber = parseInt(Math.random() * 5, 10);
                switch (randomNumber) {
                    case 1:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Đứng trước một cô gái xinh đẹp thường làm ta bối rối", message.threadID);
                        setTimeout(function () {
                            api.sendMessage("Không rõ là tớ ngu không hiểu ý cậu, hay là cậu xinh quá mức nữa", message.threadID);
                        }, 500);
                        return;
                        break;
                    case 2:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Đến bản thân tớ, đôi lúc tớ còn không hiểu", message.threadID);
                        setTimeout(function () {
                            api.sendMessage("Miệng lưỡi con người, thiên biến vạn hóa, tớ hiểu làm sao?", message.threadID);
                        }, 500);
                        setTimeout(function () {
                            api.sendMessage("Sao mình lại có giọng điệu biện minh thế được nhỉ?", message.threadID);
                        }, 1000);
                        return;
                        break;
                    case 3:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Cậu có nhận ra, nói chuyện với cậu rất thú vị không?", message.threadID);
                        return;
                        break;
                    case 4:
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Tớ được cái rep rất nhanh, nhưng cũng thường không hiểu gì =))", message.threadID);
                        return;
                        break;
                    default:
                        var today = new Date();
                        console.log("FB.com/" + message.threadID + ' - Message: ' + message.body);
                        api.sendMessage("Xin chào, bây giờ là " + today.getHours() + " giờ, " + today.getMinutes() + " phút", message.threadID);
                        setTimeout(function () {
                            api.sendMessage("Còn giờ Trung Quốc là " + (today.getHours() + 1) + " giờ, " + today.getMinutes() + " phút", message.threadID);
                        }, 500);
                        setTimeout(function () {
                            api.sendMessage("Vì tôi không biết nói gì nên tôi nhắc nhẹ về thời gian vậy", message.threadID);
                        }, 1000);
                        return;
                        break;
                }
            }
        }
    });
});
