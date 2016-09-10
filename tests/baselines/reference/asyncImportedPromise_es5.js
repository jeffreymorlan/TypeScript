//// [tests/cases/conformance/async/es5/asyncImportedPromise_es5.ts] ////

//// [task.ts]
export class Task<T> extends Promise<T> { }

//// [test.ts]
import { Task } from "./task";
class Test {
    async example<T>(): Task<T> { return; }
}

//// [task.js]
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Task = (function (_super) {
    __extends(Task, _super);
    function Task() {
        _super.apply(this, arguments);
    }
    return Task;
}(Promise));
exports.Task = Task;
//// [test.js]
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (sent[0] === 1) throw sent[1]; return sent[1]; }, trys: [], stack: [] }, sent, f;
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (1) {
            if (_.done) switch (op[0]) {
                case 0: return { value: void 0, done: true };
                case 1: case 6: throw op[1];
                case 2: return { value: op[1], done: true };
            }
            try {
                switch (f = 1, op[0]) {
                    case 0: case 1: sent = op; break;
                    case 4: return _.label++, { value: op[1], done: false };
                    case 7: op = _.stack.pop(), _.trys.pop(); continue;
                    default:
                        var r = _.trys.length > 0 && _.trys[_.trys.length - 1];
                        if (!r && (op[0] === 6 || op[0] === 2)) { _.done = 1; continue; }
                        if (op[0] === 3 && (!r || (op[1] > r[0] && op[1] < r[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < r[1]) { _.label = r[1], sent = op; break; }
                        if (r && _.label < r[2]) { _.label = r[2], _.stack.push(op); break; }
                        if (r[2]) { _.stack.pop(); }
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) { op = [6, e]; }
            finally { f = 0, sent = void 0; }
        }
    }
    return {
        next: function (v) { return step([0, v]); },
        "throw": function (v) { return step([1, v]); },
        "return": function (v) { return step([2, v]); }
    };
};
var task_1 = require("./task");
var Test = (function () {
    function Test() {
    }
    Test.prototype.example = function () {
        return __awaiter(this, void 0, task_1.Task, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    return Test;
}());
