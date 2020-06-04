import 'mocha';
import nephilimSuite from "./Nephilim.spec";
import raceSuite from "./Race.spec";
import baseSuite from "./Base.spec";
import clazzSuite from "./Clazz.spec";

describe('basic sheet', baseSuite.bind(this));
describe('nephilim suite', nephilimSuite.bind(this));
describe('race suite', raceSuite.bind(this));
describe('clazz suite', clazzSuite.bind(this));