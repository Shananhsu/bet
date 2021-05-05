//創建一個音樂播放器的類 單例模式
class Player {
    constructor() { //類的構造函數
        //如果類已經有實例了，就返回這個實例
        if (Player.instance) return Player.instance;
        //如果没有實例化，就去構造一個實例
        return this.getInstance(...arguments);
    }

    //構建實例
    getInstance() {
        let instance = new PlayerCreator(...arguments);
        //讓實例可以使用到Player的原型的屬性方法
        // instance.__proto__=Player.prototype;
        // instance.constructor=Player;
        //把構建好的實例掛在Player類上
        Player.instance = instance;
        return instance;
    }
}

//歌曲信息
class Musics {
    //歌曲
    constructor() {
            this.songs = [{
                    id: 1,
                    title: 'NEXT COLOR PLANET 星街すいせい',
                    singer: '星街すいせい',
                    songUrl: './songs/NEXT COLOR PLANET 星街すいせい.mp3',
                    imageUrl: './images/song/NEXT COLOR PLANET 星街すいせい.png'

                },
                {
                    id: 2,
                    title: 'KING／Covered by紫咲シオン【歌ってみた】',
                    singer: '紫咲シオン',
                    songUrl: './songs/KINGCovered by紫咲シオン歌ってみた.mp3',
                    imageUrl: './images/song/KINGCovered by紫咲シオン歌ってみた.png'
                },
                {
                    id: 3,
                    title: 'ホロライブ言えるかな？Beyond the Stage ver.【STAGE1＋2 edit】',
                    singer: 'Hololive 全員',
                    songUrl: './songs/ホロライブ言えるかな？ Beyond the Stage ver.【STAGE1＋2 edit】.mp3',
                    imageUrl: './images/song/ホロライブ言えるかな？.png'
                },
                {
                    id: 4,
                    title: '1st Single 【 REDHEART 】',
                    singer: '赤井はあと',
                    songUrl: './songs/1st Single REDHEART.mp3',
                    imageUrl: './images/song/1st Single REDHEART.png'
                },
                {
                    id: 5,
                    title: '百鬼祭/常闇トワ(cover)',
                    singer: '常闇トワ',
                    songUrl: './songs/百鬼祭常闇トワ(cover).mp3',
                    imageUrl: './images/song/百鬼祭常闇トワ(cover).png'
                },
                {
                    id: 6,
                    title: '月陽-ツキアカリ-／星街すいせい＆天音かなた(Cover)',
                    singer: '星街すいせい＆天音かなた',
                    songUrl: './songs/月陽-ツキアカリ-星街すいせい天音かなた(Cover).mp3',
                    imageUrl: './images/song/月陽-ツキアカリ-星街すいせい天音かなた(Cover).png'
                },
                {
                    id: 7,
                    title: 'Minato Aqua - For The Win 湊あくあオリジナル曲',
                    singer: '湊あくあ',
                    songUrl: './songs/Minato Aqua - For The Win 湊あくあオリジナル曲.mp3',
                    imageUrl: './images/song/Minato Aqua - For The Win 湊あくあオリジナル曲.png'
                },
                {
                    id: 8,
                    title: 'Ed Sheeran - Shape Of You ( cover by Akaihaato )',
                    singer: '赤井はあと',
                    songUrl: './songs/Ed Sheeran - Shape Of You (cover by Akaihaato).mp3',
                    imageUrl: './images/song/Ed Sheeran - Shape Of You ( cover by Akaihaato ).png'
                },
                {
                    id: 9,

                    title: 'ECHO 赤井はあと【歌ってみた】',
                    singer: '赤井はあと',
                    songUrl: './songs/ECHO赤井はあと【歌ってみた】.mp3',
                    imageUrl: './images/song/ECHO赤井はあと【歌ってみた】.png'
                },
                {
                    id: 10,
                    title: '夜に駆ける Covered by 紫咲シオンYOASOBI',
                    singer: '紫咲シオン',
                    songUrl: './songs/夜に駆ける Covered by 紫咲シオンYOASOBI.mp3',
                    imageUrl: './images/song/夜に駆ける Covered by 紫咲シオンYOASOBI.png'
                },
                {
                    id: 11,
                    title: '歌ってみた花に亡霊 ヨルシカ潤羽るしあcover',
                    singer: '潤羽るしあ',
                    songUrl: './songs/歌ってみた花に亡霊 ヨルシカ潤羽るしあcover.mp3',
                    imageUrl: './images/song/歌ってみた花に亡霊 ヨルシカ潤羽るしあcover.png'
                },
                {
                    id: 12,
                    title: 'Ahoy!! 我ら宝鐘海賊団',
                    singer: '宝鐘マリン',
                    songUrl: './songs/Ahoy!! 我ら宝鐘海賊団.mp3',
                    imageUrl: './images/song/Ahoy!! 我ら宝鐘海賊団.png'
                },
                {
                    id: 13,
                    title: 'magnet/宝鐘マリン・潤羽るしあ',
                    singer: '宝鐘マリン&潤羽るしあ',
                    songUrl: './songs/magnet宝鐘マリン潤羽るしあcover (Houshou Marine and Uruha Rushia).mp3',
                    imageUrl: '../images/song/magnet宝鐘マリン潤羽るしあcover (Houshou Marine and Uruha Rushia).png'

                },
                {
                    id: 14,
                    title: 'ゴーストルール天音かなた(Cover)',
                    singer: '天音かなた',
                    songUrl: './songs/ゴーストルール天音かなた(Cover).mp3',
                    imageUrl: '../images/song/ゴーストルール天音かなた(Cover).png'
                },
                {
                    id: 15,
                    title: '恋愛裁判　Ver.戌神ころね',
                    singer: '戌神ころね',
                    songUrl: './songs/恋愛裁判　Ver.戌神ころね.mp3',
                    imageUrl: '../images/song/恋愛裁判　Ver.戌神ころね.png'
                },
                {
                    id: 16,
                    title: '失礼しますがRIP',
                    singer: 'Calliope Mori',
                    songUrl: './songs/[ORIGINAL SONG] 失礼しますがRIP Excuse My Rudeness, But Could You Please RIP - Calliope Mori.mp3',
                    imageUrl: '../images/song/[ORIGINAL SONG] 失礼しますがRIP Excuse My Rudeness, But Could You Please RIP - Calliope Mori.png'
                },
                {
                    id: 17,
                    title: '曇天羊角巻わため feat.Calliope Moriオリジナル曲',
                    singer: '角巻わため',
                    songUrl: './songs/曇天羊角巻わため feat.Calliope Moriオリジナル曲.mp3',
                    imageUrl: '../images/song/曇天羊角巻わため feat.Calliope Moriオリジナル曲.png'
                },
                {
                    id: 18,
                    title: 'ゾンビランドサガフランシュシュ佐賀事変(Cover)',
                    singer: '星街すいせい&Hololive三期生',
                    songUrl: './songs/ゾンビランドサガフランシュシュ佐賀事変 星街すいせい with ホロライブファンタジー(Cover).mp3',
                    imageUrl: '../images/song/ゾンビランドサガフランシュシュ佐賀事変 星街すいせい with ホロライブファンタジー(Cover).png'
                },
                {
                    id: 19,
                    title: 'バレンタインにインドア系ならトラックメイカー湊あくあ歌ってみた',
                    singer: '湊あくあ',
                    songUrl: './songs/バレンタインにインドア系ならトラックメイカー湊あくあ歌ってみた.mp3',
                    imageUrl: './images/song/バレンタインにインドア系ならトラックメイカー湊あくあ歌ってみた.png'
                },
                {
                    id: 20,
                    title: '愛昧ショコラーテ角巻わためオリジナル曲',
                    singer: '角巻わため',
                    songUrl: './songs/愛昧ショコラーテ角巻わためオリジナル曲.mp3',
                    imageUrl: './images/song/愛昧ショコラーテ角巻わためオリジナル曲.png'
                },
                {
                    id: 21,
                    title: 'サクラカゼ さくらみこオリジナル曲',
                    singer: 'さくらみこ',
                    songUrl: './songs/サクラカゼ さくらみこオリジナル曲.mp3',
                    imageUrl: './images/song/サクラカゼ さくらみこオリジナル曲.png'
                },
                {
                    id: 22,
                    title: 'original#あくあ色はれっとホロライブ湊あくあ',
                    singer: '湊あくあ',
                    songUrl: './songs/original_あくあ色はれっとホロライブ湊あくあ.mp3',
                    imageUrl: './images/song/original_あくあ色はれっとホロライブ湊あくあ.png'
                },
                {
                    id: 23,
                    title: 'Candy-Go-Round',
                    singer: 'ロボ子&夜空メル&アキ&湊あくあ&不知火フレア ',
                    songUrl: './songs/Candy-Go-Round.mp3',
                    imageUrl: './images/song/Candy-Go-Round.png'
                },
                {
                    id: 24,
                    title: 'ふわふわ時間 猫又おかゆ (Cover)',
                    singer: '猫又おかゆ',
                    songUrl: './songs/ふわふわ時間 猫又おかゆ (Cover).mp3',
                    imageUrl: './images/song/ふわふわ時間 猫又おかゆ (Cover).png'
                },
                {
                    id: 25,
                    title: 'ディスコミュ星人/兎田ぺこら(cover)',
                    singer: '兎田ぺこら',
                    songUrl: './songs/ディスコミュ星人兎田ぺこら(cover).mp3',
                    imageUrl: './images/song/ディスコミュ星人兎田ぺこら(cover).png'
                },
                {
                    id: 26,
                    title: 'おちゃめ機能ホロライブが吹っ切れた24人で歌ってみた',
                    singer: 'Hololive 24員',
                    songUrl: './songs/おちゃめ機能ホロライブが吹っ切れた24人で歌ってみた.mp3',
                    imageUrl: './images/song/おちゃめ機能ホロライブが吹っ切れた24人で歌ってみた.png'
                },
                {
                    id: 27,
                    title: '歌ってみた4K妄想税癒月ちょこオリジナルMV',
                    singer: '癒月ちょこ',
                    songUrl: './songs/歌ってみた4K妄想税癒月ちょこオリジナルMV.mp3',
                    imageUrl: './images/song/歌ってみた4K妄想税癒月ちょこオリジナルMV.png'
                },
                {
                    id: 28,
                    title: '1st ALBUM収録曲ちいさな心が決めたこと AZKiwithout U',
                    singer: 'AZKi',
                    songUrl: './songs/1st ALBUM収録曲ちいさな心が決めたこと AZKiwithout U.mp3',
                    imageUrl: './images/song/1st ALBUM収録曲ちいさな心が決めたこと AZKiwithout U.png'
                },
                {
                    id: 29,
                    title: '11st ALBUM収録曲フロンティアローカス AZKiwithout U',
                    singer: 'AZKi',
                    songUrl: './songs/1st ALBUM収録曲フロンティアローカス AZKiwithout U.mp3',
                    imageUrl: './images/song/11st ALBUM収録曲フロンティアローカス AZKiwithout U.png'
                },
                {
                    id: 30,
                    title: '歌ってみたmelty world_18',
                    singer: '星街すいせい',
                    songUrl: './songs/歌ってみたmelty world_18.mp3',
                    imageUrl: './images/song/歌ってみたmelty world_18.png'
                },
            ]
        }
        //根據索引獲取歌曲的方法
    getSongByNum(index) {
        return this.songs[index];
    }
}

//真正構建的撥放器
class PlayerCreator {
    constructor() {
            this.audio = document.querySelector('.music-player__audio') // Audio dom元素, 因為很多api都是需要原生audio調用的，所以不用jq獲取
                // this.audio.muted = true; // 控制靜音
            this.audio.volume = 0.8;

            //工具
            this.util = new Util();
            this.musics = new Musics(); //歌曲信息
            this.song_index = 0; // 當前播放的歌曲索引
            this.loop_mode = 0; // 1 2
            // 下方歌曲列表容器
            this.song_list = $('.music__list_content');

            this.render_doms = { //切换歌曲时需要渲染的dom组
                title: $('.music__info--title'),
                singer: $('.music__info--singer'),
                image: $('.music-player__image img'),
                blur: $('.music-player__blur')
            }
            this.ban_dom = { //禁音时需要渲染的dom组
                control__btn: $('.control__volume--icon')
            }

            // 時間顯示容器
            this.render_time = {
                now: $('.nowTime'),
                total: $('.totalTime')
            }

            // 唱片
            this.disc = {
                image: $('.music-player__image'),
                pointer: $('.music-player__pointer')
            };
            //播放器初始化
            this.init();
        }
        //初始化函數
    init() {
            this.renderSongList();
            this.renderSongStyle();
            this.bindEventListener();
        }
        //生成播放列表
    renderSongList() {
        let _str = '';
        this.musics.songs.forEach((song, i) => {
            _str += `<li class="music__list__item">${song.title}</li>`
        });
        this.song_list.html(_str);
    }

    //根據歌曲去渲染視圖
    renderSongStyle() {
            let {
                title,
                singer,
                songUrl,
                imageUrl
            } = this.musics.getSongByNum(this.song_index);
            this.audio.src = songUrl;
            this.render_doms.title.html(title);
            this.render_doms.singer.html(singer);
            this.render_doms.image.prop('src', imageUrl);
            this.render_doms.blur.css('background-image', 'url("' + imageUrl + '")');

            //切換列表中的item的類名 play
            this.song_list.find('.music__list__item').eq(this.song_index).addClass('play').siblings().removeClass('play');
        }
        //綁定各種事件
    bindEventListener() {
        //播放按鈕
        this.$play = new Btns('.player-control__btn--play', {
            click: this.handlePlayAndPause.bind(this)
        });
        //上一首
        this.$prev = new Btns('.player-control__btn--prev', {
            click: this.changeSong.bind(this, 'prev')
        });
        //下一首
        this.$next = new Btns('.player-control__btn--next', {
            click: this.changeSong.bind(this, 'next')
        });
        //循環模式
        this.$mode = new Btns('.player-control__btn--mode', {
            click: this.changePlayMode.bind(this)
        });
        //禁音
        this.$ban = new Btns('.control__volume--icon', {
                click: this.banNotes.bind(this)
            })
            //列表點擊
        this.song_list.on('click', 'li', (e) => {
            let index = $(e.target).index();
            this.changeSong(index);
        })

        //音量控制 audio標籤音量 vlouem 屬性控制0-1

        new Progress('.control__volume--progress', {
            min: 0,
            max: 1,
            value: this.audio.volume,
            handler: (value) => { //更改進度時
                this.audio.volume = value;
            }
        })


        //歌曲進度 this.audio.duration

        //可以播放的時候觸發（歌曲的基本信息都已經獲取到了）
        this.audio.oncanplay = () => {
            //避免重複實例化
            if (this.progress) {
                this.progress.max = this.audio.duration; //切換歌曲後更新時長
                this.render_time.total.html(this.util.formatTime(this.audio.duration));
                return false;
            };
            this.progress = new Progress('.player__song--progress', {
                    min: 0,
                    max: this.audio.duration,
                    value: 0,
                    handler: (value) => {
                        this.audio.currentTime = value;
                    }
                })
                //調整總時長
            this.render_time.total.html(this.util.formatTime(this.audio.duration));
        }

        //會在播放的時候持續觸發
        this.audio.ontimeupdate = () => {
            this.progress.setValue(this.audio.currentTime);
            //調整當前時長
            this.render_time.now.html(this.util.formatTime(this.audio.currentTime));
        }

        //當歌曲播放完成的時候
        this.audio.onended = () => {
            this.changeSong('next');
            //播放完，換歌后，重新播放
            this.audio.play();
        }

    }

    //播放暫停控制
    handlePlayAndPause() {
        let _o_i = this.$play.$el.find('i');
        //this.audio.pauseed值为true 说明目前是不播放
        if (this.audio.paused) { //現在是暫停的 要播放
            this.audio.play();
            _o_i.removeClass('icon-play').addClass('icon-pause');
            this.disc.image.addClass('play');
            this.disc.pointer.addClass('play')
        } else {
            this.audio.pause();
            _o_i.addClass('icon-play').removeClass('icon-pause');
            this.disc.image.removeClass('play');
            this.disc.pointer.removeClass('play');
        }
    }

    //更改循環模式
    changePlayMode() {
            this.loop_mode++;
            if (this.loop_mode > 2) this.loop_mode = 0;
            this.renderPlayMode();
        }
        //更改按鈕樣式
    renderPlayMode() {
        let _classess = ['loop', 'random', 'single'];
        let _o_i = this.$mode.$el.find('i');
        //prop 改一些標籤的自有屬性 attr改一些標籤的自定義屬性
        _o_i.prop('class', 'iconfont icon-' + _classess[this.loop_mode])
    }

    //更改歌曲索引
    changeSongIndex(type) {
            if (typeof type === 'number') {
                this.song_index = type;
            } else {
                if (this.loop_mode === 0) {
                    //列表循环
                    this.song_index += type === 'next' ? 1 : -1;
                    if (this.song_index > this.musics.songs.length - 1) this.song_index = 0;
                    if (this.song_index < 0) this.song_index = this.musics.songs.length - 1;
                } else if (this.loop_mode === 1) {
                    //隨機播放
                    let _length = this.musics.songs.length;
                    let _random = Math.floor(Math.random() * _length);
                    for (let i = 0; i < 10000; i++) { //隨機的數為本身則繼續隨機
                        if (this.song_index == _random) {
                            _random = Math.floor(Math.random() * _length);
                        } else {
                            this.song_index = _random;
                            break;
                        }
                    }
                } else if (this.loop_mode === 2) {
                    this.song_index = this.song_index;
                }
            }
        }
        //歌曲時長
    songTime() {
            let totalMinute = parseInt(this.audio.duration / 60) < 10 ? "0" + parseInt(this.audio.duration / 60) : parseInt(this.audio.duration / 60);
            let totalSecond = parseInt(this.audio.duration % 60) < 10 ? "0" + parseInt(this.audio.duration % 60) : parseInt(this.audio.duration % 60);
            $('.totalTime').text(totalMinute + ':' + totalSecond);
        }
        //切換歌曲
    changeSong(type) {
            //更改索引
            this.changeSongIndex(type);
            //記錄切歌前的狀態
            let _is_pause = this.audio.paused;
            //切歌后更改視圖顯示
            this.renderSongStyle();
            //如果切歌前是在播放，就繼續播放
            if (!_is_pause) this.audio.play();
        }
        //禁音
    banNotes() {
        let _o_i = this.$ban.$el.find("i");
        if (this.audio.muted == true) { //如果禁音則開啟
            this.audio.muted = false;
            _o_i.removeClass('icon-muted').addClass('icon-volume');
        } else {
            this.audio.muted = true;
            _o_i.removeClass('icon-volume').addClass('icon-muted');
        }
    }
}

//进度条
class Progress {
    constructor(selector, options) {
        $.extend(this, options);
        ///給this掛載傳入的參數
        this.$el = $(selector);
        this.width = this.$el.width();
        this.init();
    }

    //進度條初始化
    init() {
            this.renderBackAndPointer();
            //this.bindEvents();
            this.drag();
            this.value;
            this.changeDOMStyle(this.width * this.value);
        }
        //為進度條渲染back和pointer
    renderBackAndPointer() {
        this.$back = $('<div class="back">');
        this.$pointer = $('<div class="pointer">');

        this.$el.append(this.$back);
        this.$el.append(this.$pointer);
    }

    setValue(value) { //主動調用，傳入value值，設置進度條樣式
        let _distance = this.width * value / (this.max - this.min);
        this.changeDOMStyle(_distance);
    }

    drag() {
        let ele = this.$pointer;
        let father = this.$el;
        let flag = false; //滑鼠是否點擊
        ele.mousedown((e) => {
            flag = true;
            let mousePos = {
                x: e.offsetX
            }
            $(document).mousemove((e) => {
                if (flag === true) {
                    let _left = e.clientX - father.offset().left - mousePos.x;
                    let _distance = Math.max(0, Math.min(_left, father.outerWidth(false) - ele.outerWidth(false)))
                    let _ratio = _distance / father.outerWidth(false);
                    let _value = _ratio * (this.max - this.min); //當前的音量
                    this.changeDOMStyle(_distance);
                    this.handler(_value); //更改進度之後，執行回調
                }
            })
        })
        $(document).mouseup(() => {
            flag = false;
        })

    }

    bindEvents() { //滑鼠點擊時更改
            this.$el.click((e) => {
                let _x = e.offsetX; //滑鼠距離元素左邊的距離
                let _ratio = _x / this.width;
                let _value = _ratio * (this.max - this.min); //當前的音量
                this.changeDOMStyle(_x);
                this.handler(_value); //更改進度之後，執行回調
            })
        }
        //更改pointer和back
    changeDOMStyle(distance) {
        this.$back.width(distance + 7 == 7 ? 0 : distance + 7); //進度為0時將進度條背景改為0否則加上進度按鈕的長度
        this.$pointer.css('left', distance + 'px');
    }
}


//按鈕
class Btns {
    constructor(selector, handlers) {
        this.$el = $(selector); //元素
        this.bindEvents(handlers);
    }
    bindEvents(handlers) { //绑定事件
        for (const event in handlers) {
            //使用值的時候保證鍵值對在對像中是存在的
            if (handlers.hasOwnProperty(event)) {
                this.$el.on(event, handlers[event]);
            }
        }
    }
}
new Player();