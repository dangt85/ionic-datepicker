(function (doc, cssText) {
    var styleEl = doc.createElement("style");
    doc.getElementsByTagName("head")[0].appendChild(styleEl);
    if (styleEl.styleSheet) {
        if (!styleEl.styleSheet.disabled) {
            styleEl.styleSheet.cssText = cssText;
        }
    } else {
        try {
            styleEl.innerHTML = cssText;
        } catch (ignore) {
            styleEl.innerText = cssText;
        }
    }
}(document, ".datepicker-content{height:210px;overflow:auto}.visible-overflow{overflow:visible}.center{text-align:center}.bold{font-weight:700}.datepicker-day-of-month,.datepicker-month,.datepicker-year{margin-top:10px;margin-bottom:10px;color:#fff;cursor:pointer}.datepicker-selection{cursor:pointer}.datepicker-month,.datepicker-year{font-size:14px}.datepicker-day-of-month{font-size:60px;font-weight:700}.datepicker-balanced{background-color:#008d7f}.white{color:#fff}.datepicker-balanced-light{background-color:#009688}.datepicker-color-balanced-light{color:#009688!important}.datepicker-date-col:hover{background-color:rgba(56,126,245,.5);cursor:pointer}.no-padding{padding:0}.datepicker-date-cell{padding:5px}.datepicker-selected{background-color:#b6d9d6}.datepicker-current{color:#3caa9f}.datepicker-disabled{color:#aaa}.datepicker-disabled:hover{background-color:transparent;cursor:default}.datepicker-modal-container{position:absolute;top:0;left:0;bottom:0;right:0;background:transparent;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;-moz-justify-content:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-moz-align-items:center;align-items:center;z-index:1}.datepicker-modal-container,.datepicker-modal-container .datepicker-modal{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex}.datepicker-modal-container .datepicker-modal{width:250px;max-width:100%;max-height:90%;border-radius:0;background-color:hsla(0,0%,100%,.9);-webkit-box-direction:normal;-webkit-box-orient:vertical;-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.datepicker-modal{box-shadow:1px 1px 3px #888}.datepicker-modal-head{padding:8px 10px;text-align:center}.datepicker-modal-title{margin:0;padding:0;font-size:13px}.datepicker-modal-buttons{display:-webkit-box;display:-webkit-flex;display:-moz-flex;display:-ms-flexbox;display:flex;-webkit-box-direction:normal;-webkit-box-orient:horizontal;-webkit-flex-direction:row;-moz-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:10px;min-height:65px;font-size:12px;font-weight:700}.datepicker-modal-buttons .button{-webkit-box-flex:1;-webkit-flex:1;-moz-flex:1;-ms-flex:1;flex:1;display:block;min-height:45px;border-radius:2px;line-height:20px;margin-right:5px}.datepicker-modal-buttons .button:last-child{margin-right:0}"));
