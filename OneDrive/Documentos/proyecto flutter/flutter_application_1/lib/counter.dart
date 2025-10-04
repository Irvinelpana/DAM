import 'package:flutter/material.dart';
import 'package:flutter_application_1/widget/button.dart';
import 'package:flutter_application_1/widget/my_appbar.dart';

class CounterScreen extends StatefulWidget {
  const CounterScreen({super.key});

  @override
  State<CounterScreen> createState() => _CounterScreenState();
}

class _CounterScreenState extends State<CounterScreen> {
  int counter = 0;

  // Lista de colores (puedes agregar o cambiar)
  final List<Color> colors = [
    Colors.white,   // por defecto
    Colors.blue,
    Colors.green,
    Colors.yellow,
    Colors.red,
    Colors.orange,
    Colors.purple,
    Colors.cyan,
  ];

  Color get backgroundColor {
    // Cada 10 clics avanza un color
    int index = (counter ~/ 10) % colors.length;
    return colors[index];
  }

  void _increment() {
    setState(() {
      counter++;
    });
  }

  void _decrement() {
    setState(() {
      counter--;
      if (counter < 0) counter = 0; // evitar negativos si quieres
    });
  }

  void _reset() {
    setState(() {
      counter = 0;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: backgroundColor, // 👈 fondo dinámico
      appBar: MyAppbar(title: "App Click", onPressed: () {}),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              "$counter",
              style: const TextStyle(
                  fontSize: 160, fontWeight: FontWeight.w900),
            ),
            const Text("Clicks",
                style: TextStyle(
                    fontSize: 25, fontWeight: FontWeight.bold)),
          ],
        ),
      ),
      floatingActionButton: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          MyButton(onPressed: _increment, icon: Icons.plus_one_outlined),
          const SizedBox(height: 10),
          MyButton(
              onPressed: _decrement,
              icon: Icons.exposure_minus_1_outlined),
          const SizedBox(height: 10),
          MyButton(onPressed: _reset, icon: Icons.refresh),
        ],
      ),
    );
  }
}
