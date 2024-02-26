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
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrationProvider = void 0;
const migrations = {};
exports.migrationProvider = {
    getMigrations() {
        return __awaiter(this, void 0, void 0, function* () {
            return migrations;
        });
    },
};
migrations['001'] = {
    up(db) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db.schema
                .createTable('post')
                .addColumn('uri', 'varchar', (col) => col.primaryKey())
                .addColumn('cid', 'varchar', (col) => col.notNull())
                .addColumn('replyParent', 'varchar')
                .addColumn('replyRoot', 'varchar')
                .addColumn('indexedAt', 'varchar', (col) => col.notNull())
                .addColumn('text', 'text')
                .execute();
            yield db.schema
                .createTable('sub_state')
                .addColumn('service', 'varchar', (col) => col.primaryKey())
                .addColumn('cursor', 'integer', (col) => col.notNull())
                .execute();
        });
    },
    down(db) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db.schema.dropTable('post').execute();
            yield db.schema.dropTable('sub_state').execute();
        });
    },
};
