/*
* tangshi
* https://github.com/lyuehh/tangshi
*
* Copyright (c) 2013 lyuehh
* Licensed under the MIT license.
*/


var _ = require('underscore');
var json = require('../json/tangshi.json');

var getPoetryByAuthor = function(author) {
    return json[author];
};

var getPoetryByTitle = function(title) {
    var all = _.flatten(_.values(json));
    return _.filter(all, function(p) {
        return p.title === title;
    });
};

var getPoetryBySearchTitle = function(search) {
    var all = _.flatten(_.values(json));
    var poetries = _.filter(all, function(p) {
        return p.title.indexOf(search) !== -1;
    });
    return poetries;
};

var getPoetryBySearchContent = function(content) {
    var all = _.flatten(_.values(json));
    var poetries = _.filter(all, function(p) {
        return p.content.join("").indexOf(content) !== -1;
    });
    return poetries;
};

var getPoetryByTitleAndAuthor = function(title, author) {
    var all = json[author];
    return _.filter(all, function(p) {
        return p.title === title;
    });
};

var printPoetry = function(poteryArr) {
    _.each(poteryArr, function(p) {
        console.log(p.title + ' ' + p.author);
        console.log(p.content.join('\n'));
        console.log('\n');
    });
};

exports.getPoetryByAuthor = getPoetryByAuthor;
exports.getPoetryByTitle = getPoetryByTitle;
exports.getPoetryBySearchTitle = getPoetryBySearchTitle;
exports.getPoetryBySearchContent = getPoetryBySearchContent;
exports.getPoetryByTitleAndAuthor = getPoetryByTitleAndAuthor;
exports.printPoetry = printPoetry;