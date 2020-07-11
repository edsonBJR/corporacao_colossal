"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _express = _interopRequireDefault(require("express"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}

var router = _express.default.Router();

router.get('/:ibge/:ano-:mes-:dia', /*#__PURE__*/function () {var _ref = _asyncToGenerator(function* (req, res) {
    try {

      res.status(200).json({
        message: "Segue o fluxo..." });

    } catch (err) {
      res.status(500).send();
    }
  });return function (_x, _x2) {return _ref.apply(this, arguments);};}());

router.put('/:ibge/:mes-:dia', /*#__PURE__*/function () {var _ref2 = _asyncToGenerator(function* (req, res) {
    try {

      res.status(200).send();
    } catch (err) {
      res.status(500).send();
    }
  });return function (_x3, _x4) {return _ref2.apply(this, arguments);};}());

router.delete('/:ibge/:mes-:dia', /*#__PURE__*/function () {var _ref3 = _asyncToGenerator(function* (req, res) {
    try {

      res.status(200).send();
    } catch (err) {
      res.status(500).send();
    }
  });return function (_x5, _x6) {return _ref3.apply(this, arguments);};}());


router.put('/:ibge/:chaveFeriado', /*#__PURE__*/function () {var _ref4 = _asyncToGenerator(function* (req, res) {
    try {

      res.status(200).send();
    } catch (err) {
      res.status(500).send();
    }
  });return function (_x7, _x8) {return _ref4.apply(this, arguments);};}());

router.delete('/:ibge/:chaveFeriado', /*#__PURE__*/function () {var _ref5 = _asyncToGenerator(function* (req, res) {
    try {

      res.status(200).send();
    } catch (err) {
      res.status(500).send();
    }
  });return function (_x9, _x10) {return _ref5.apply(this, arguments);};}());var _default =

router;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9mZXJpYWRvcy1yb3V0ZXMuanMiXSwibmFtZXMiOlsicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsImdldCIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZXJyIiwic2VuZCIsInB1dCIsImRlbGV0ZSJdLCJtYXBwaW5ncyI6Im9HQUFBLDBEOztBQUVBLElBQU1BLE1BQU0sR0FBR0MsaUJBQVFDLE1BQVIsRUFBZjs7QUFFQUYsTUFBTSxDQUFDRyxHQUFQLENBQVcsdUJBQVgseURBQW9DLFdBQU1DLEdBQU4sRUFBV0MsR0FBWCxFQUFtQjtBQUNuRCxRQUFJOztBQUVBQSxNQUFBQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUNqQkMsUUFBQUEsT0FBTyxFQUFFLGtCQURRLEVBQXJCOztBQUdILEtBTEQsQ0FLRSxPQUFPQyxHQUFQLEVBQVk7QUFDVkosTUFBQUEsR0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkksSUFBaEI7QUFDSDtBQUNKLEdBVEQ7O0FBV0FWLE1BQU0sQ0FBQ1csR0FBUCxDQUFXLGtCQUFYLDBEQUErQixXQUFNUCxHQUFOLEVBQVdDLEdBQVgsRUFBbUI7QUFDOUMsUUFBSTs7QUFFQUEsTUFBQUEsR0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkksSUFBaEI7QUFDSCxLQUhELENBR0UsT0FBT0QsR0FBUCxFQUFZO0FBQ1ZKLE1BQUFBLEdBQUcsQ0FBQ0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JJLElBQWhCO0FBQ0g7QUFDSixHQVBEOztBQVNBVixNQUFNLENBQUNZLE1BQVAsQ0FBYyxrQkFBZCwwREFBa0MsV0FBTVIsR0FBTixFQUFXQyxHQUFYLEVBQW1CO0FBQ2pELFFBQUk7O0FBRUFBLE1BQUFBLEdBQUcsQ0FBQ0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JJLElBQWhCO0FBQ0gsS0FIRCxDQUdFLE9BQU9ELEdBQVAsRUFBWTtBQUNWSixNQUFBQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCSSxJQUFoQjtBQUNIO0FBQ0osR0FQRDs7O0FBVUFWLE1BQU0sQ0FBQ1csR0FBUCxDQUFXLHNCQUFYLDBEQUFtQyxXQUFNUCxHQUFOLEVBQVdDLEdBQVgsRUFBbUI7QUFDbEQsUUFBSTs7QUFFQUEsTUFBQUEsR0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkksSUFBaEI7QUFDSCxLQUhELENBR0UsT0FBT0QsR0FBUCxFQUFZO0FBQ1ZKLE1BQUFBLEdBQUcsQ0FBQ0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JJLElBQWhCO0FBQ0g7QUFDSixHQVBEOztBQVNBVixNQUFNLENBQUNZLE1BQVAsQ0FBYyxzQkFBZCwwREFBc0MsV0FBTVIsR0FBTixFQUFXQyxHQUFYLEVBQW1CO0FBQ3JELFFBQUk7O0FBRUFBLE1BQUFBLEdBQUcsQ0FBQ0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JJLElBQWhCO0FBQ0gsS0FIRCxDQUdFLE9BQU9ELEdBQVAsRUFBWTtBQUNWSixNQUFBQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCSSxJQUFoQjtBQUNIO0FBQ0osR0FQRCwwRTs7QUFTZVYsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5yb3V0ZXIuZ2V0KCcvOmliZ2UvOmFuby06bWVzLTpkaWEnLCBhc3luYyhyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG5cbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogXCJTZWd1ZSBvIGZsdXhvLi4uXCJcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCk7XG4gICAgfVxufSk7XG5cbnJvdXRlci5wdXQoJy86aWJnZS86bWVzLTpkaWEnLCBhc3luYyhyZXEsIHJlcykgPT4ge1xuICAgIHRyeSB7XG5cbiAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoKTtcbiAgICB9XG59KTtcblxucm91dGVyLmRlbGV0ZSgnLzppYmdlLzptZXMtOmRpYScsIGFzeW5jKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcblxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCgpO1xuICAgIH1cbn0pO1xuXG5cbnJvdXRlci5wdXQoJy86aWJnZS86Y2hhdmVGZXJpYWRvJywgYXN5bmMocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCk7XG4gICAgfVxufSk7XG5cbnJvdXRlci5kZWxldGUoJy86aWJnZS86Y2hhdmVGZXJpYWRvJywgYXN5bmMocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCk7XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiXX0=