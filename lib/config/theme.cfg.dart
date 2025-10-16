import 'package:flutter/material.dart';

const Color _myColor = Color.fromARGB(255, 255, 47, 0);

const List<Color> _colors = [
  _myColor,
  Colors.red,
  Colors.cyan,
  Colors.amber,
  Colors.green,
  Colors.blue,
  Colors.purple,
];

class ThemeConfig {
  final int currentColor;

  ThemeConfig({this.currentColor = 0})
      : assert(currentColor >= 0 && currentColor < _colors.length,
      "Color must be between 0 and ${_colors.length - 1}",
      );

  ThemeData myThese() {
    return ThemeData(
      useMaterial3: true,
      colorSchemeSeed: _colors[currentColor],
    );
  }
}