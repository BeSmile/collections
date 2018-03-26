/**
 * Created by Smile on 2018/3/24.
 */
;(function ($, window, document) {
    //right 靠右距离
    //height 以元素位置向下挂起多少距离
    //tColor 上线颜色
    //bColor 下线颜色
    //line 线的宽度
    //distance 悬挂距离
    function Suspension (t, opts) {
        if(!(this instanceof  Suspension)) {
            return new Suspension(this, opts)
        }
        this.$self = t;

        this.$line = this.$self.find('.line');
        this.$bline = this.$self.find('.b_line');
        this.$bContent = this.$self.find('.b_content');

        this.$defaultOpts = $.extend({}, opts);
        this.$scroll = $(window).scrollTop();
        this.$top = this.$self.offset().top;//元素距离页面高度
        this.$calcTop = this.$top - $(window).scrollTop();
        this.init();
    };
    Suspension.prototype = {
        constructor: Suspension,
        init: function () {
            this._handleScroll();
            this.addEventListener();
        },
        drawLine: function () {
            const left = this.$defaultOpts.right+ Number((this.$bContent.width() - this.$defaultOpts.line) / 2);
            this.$line.css({
                position: 'fixed',
                width: this.$defaultOpts.line +'px',
                height: this.$calcTop>0?this.$calcTop:0 + 'px',
                right: left + 'px',
                background: this.$defaultOpts.tColor
            })
        },
        drawBLine: function () {
            const left = this.$defaultOpts.right + Number((this.$bContent.width() - this.$defaultOpts.line) / 2);
            this.$bline.css({
                position: 'fixed',
                width: this.$defaultOpts.line +'px',
                top: this.$calcTop>0?this.$calcTop:0 + 'px',
                height: this.$defaultOpts.distance + 'px',
                right: left + 'px',
                background: this.$defaultOpts.bColor
            })
        },
        drawCtx: function () {
            const  top = this.$calcTop + this.$defaultOpts.distance;
            const right = this.$defaultOpts.right;
            this.$bContent.css({
                position: 'fixed',
                cursor: 'pointer',

                top: top>this.$defaultOpts.distance?top:this.$defaultOpts.distance,
                right: right + 'px'
            })
        },
        draw: function () {
            this.$self.css({
                position: 'fixed',
                top: 0,
                right:  this.$defaultOpts.right + 'px'
            });
            this.drawLine();
            this.drawBLine();
            this.drawCtx();
        },
        _handleScroll: function (e) {
            const scroll = $(window).scrollTop();//浏览器滚动的距离
            const h = this.$top - scroll;
            this.$calcTop = h?h:0;
            this.draw();
        },
        addEventListener: function () {
            $(window).on('scroll', this._handleScroll.bind(this))
        }
    };
    $.fn.suspension = function(opts) {
        return new Suspension(this, opts);
    }
})(jQuery, window, document);