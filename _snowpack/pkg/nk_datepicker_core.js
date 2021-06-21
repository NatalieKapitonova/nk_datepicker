import { c as createCommonjsModule, r as react, a as commonjsGlobal } from './common/index-210ebed7.js';

var utils = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDate = exports.dateToIso = exports.getPadding = exports.formatDateString = void 0;
/**
 * Converts Date object into the pre-formatted string to output in the input field
 * @param d
 * @param pattern
 */
const formatDateString = (d, pattern) => {
    if (d === null || d === undefined) {
        return null;
    }
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    switch (pattern) {
        case "DD.MM.YYYY":
            return [exports.getPadding(day), exports.getPadding(month), year].join(".");
        case "DD/MM/YYYY":
            return [exports.getPadding(day), exports.getPadding(month), year].join("/");
        case "DD-MM-YYYY":
            return [exports.getPadding(day), exports.getPadding(month), year].join("-");
        case "MM.DD.YYYY":
            return [exports.getPadding(month), exports.getPadding(day), year].join(".");
        case "MM/DD/YYYY":
            return [exports.getPadding(month), exports.getPadding(day), year].join("/");
        case "MM-DD-YYYY":
            return [exports.getPadding(month), exports.getPadding(day), year].join("-");
        case "YYYY.MM.DD":
            return [year, exports.getPadding(month), exports.getPadding(day)].join(".");
        case "YYYY/MM/DD":
            return [year, exports.getPadding(month), exports.getPadding(day)].join("/");
        case "YYYY-MM-DD":
            return [year, exports.getPadding(month), exports.getPadding(day)].join("-");
        default:
            return [exports.getPadding(day), exports.getPadding(month), year].join(".");
    }
};
exports.formatDateString = formatDateString;
/**
 * Converts 1-2 digit number into 2-digit
 * @param n  number
 */
const getPadding = (n) => {
    if (n < 10) {
        return `0${n}`;
    }
    return n.toString();
};
exports.getPadding = getPadding;
/**
 * Converts Date into ISO string
 * To avoid UTC formatting - convert the date object into a new object first
 * @see https://medium.com/fredwong-it/js-datetime-bug-auto-set-back-one-day-53d5d5e3903b
 * @param d input Date object
 */
const dateToIso = (d) => {
    const stringFormatted = exports.formatDateString(d, "YYYY-MM-DD");
    if (stringFormatted === null || typeof stringFormatted === "undefined") {
        throw Error("This should not happen");
    }
    return new Date(stringFormatted).toISOString();
};
exports.dateToIso = dateToIso;
/**
 * Inits the date for the calendar with Date object or null
 * @param d
 */
const getDate = (d) => {
    if (!d) {
        return null;
    }
    if (typeof d === "string") {
        return new Date(d);
    }
    return d;
};
exports.getDate = getDate;
});

var core = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(react);
const U = __importStar(utils);
const DatePicker = ({ Input, CalendarOverlay }) => (props) => {
    const { name, onChange, outputDateFormat = "Date", pattern = "DD.MM.YYYY", disabled = false, } = props;
    const [value, setValue] = react_1.useState(props.value ? U.getDate(props.value) : null);
    const [valueFormatted, setValueFormatted] = react_1.useState(U.formatDateString(value, pattern));
    const [openOverlay, setOpenOverlay] = react_1.useState(false);
    react_1.useEffect(() => {
        if (props.value && props.value !== value) {
            setValue(U.getDate(props.value));
        }
    }, [props.value]);
    /** handlers */
    const handleSelectDate = (d) => {
        setValue(d);
        if (d === null) {
            onChange(null, name);
        }
        else if (outputDateFormat === "ISO") {
            onChange(U.dateToIso(d), name);
        }
        else {
            onChange(d, name);
        }
        setValueFormatted(U.formatDateString(d, props.pattern));
        setOpenOverlay(false);
    };
    /** end handlers */
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Input, { name: name, value: valueFormatted, onChange: onChange, onClick: () => setOpenOverlay(true), disabled: disabled }),
        react_1.default.createElement(CalendarOverlay, { open: openOverlay, onClose: () => setOpenOverlay(false), date: value, onSelectDate: handleSelectDate })));
};
exports.default = DatePicker;
});

var typesUi = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
});

var typesCore = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
});

var dist = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Types = exports.UITypes = exports.CorePicker = void 0;
const core_1 = __importDefault(core);
exports.CorePicker = core_1.default;
const UITypes = __importStar(typesUi);
exports.UITypes = UITypes;
const Types = __importStar(typesCore);
exports.Types = Types;
});

var CorePicker = dist.CorePicker;
export { CorePicker };
