"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrateToLatest = exports.createDb = void 0;
const better_sqlite3_1 = __importDefault(require("better-sqlite3"));
const kysely_1 = require("kysely");
const migrations_1 = require("./migrations");
const createDb = (location) => {
    return new kysely_1.Kysely({
        dialect: new kysely_1.SqliteDialect({
            database: new better_sqlite3_1.default(location),
        }),
    });
};
exports.createDb = createDb;
const migrateToLatest = (db) => __awaiter(void 0, void 0, void 0, function* () {
    const migrator = new kysely_1.Migrator({ db, provider: migrations_1.migrationProvider });
    const { error } = yield migrator.migrateToLatest();
    if (error)
        throw error;
});
exports.migrateToLatest = migrateToLatest;
