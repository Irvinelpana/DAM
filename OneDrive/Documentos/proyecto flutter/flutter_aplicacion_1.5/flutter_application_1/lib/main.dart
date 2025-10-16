import 'package:flutter/material.dart';
import 'dart:math';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: CounterScreen(),
    );
  }
}

class CounterScreen extends StatefulWidget {
  const CounterScreen({super.key});

  @override
  State<CounterScreen> createState() => _CounterScreenState();
}

class _CounterScreenState extends State<CounterScreen> {
  int counter = 0;
  Color backgroundColor = Colors.white;

  final List<Color> pastelColors = [
    Color(0xFFFFC1CC), // rosa pastel
    Color(0xFFB5EAD7), // verde pastel
    Color(0xFFCAF7E3), // aqua pastel
    Color(0xFFFFF1C1), // amarillo pastel
    Color(0xFFD7BDE2), // lila pastel
  ];

  void _increment() {
    setState(() {
      counter++;
    });
  }

  void _decrement() {
    setState(() {
      counter--;
    });
  }

  void _reset() {
    setState(() {
      counter = 0;
      backgroundColor = Colors.white;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Counter App"),
        backgroundColor: Colors.blue,
        actions: [
          Builder(
            builder: (context) {
              if (counter % 10 == 0 && counter != 0) {
                Future.microtask(() {
                  setState(() {
                    backgroundColor =
                        pastelColors[Random().nextInt(pastelColors.length)];
                  });
                });
              }
              return const SizedBox();
            },
          )
        ],
      ),
      backgroundColor: backgroundColor,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              "$counter",
              style: const TextStyle(fontSize: 120, fontWeight: FontWeight.w200),
            ),
            const Text("Clicks", style: TextStyle(fontSize: 25)),
          ],
        ),
      ),
      floatingActionButton: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          FloatingActionButton(
            onPressed: _reset,
            child: const Icon(Icons.refresh_outlined),
          ),
          const SizedBox(height: 10),
          FloatingActionButton(
            onPressed: _increment,
            child: const Icon(Icons.plus_one),
          ),
          const SizedBox(height: 10),
          FloatingActionButton(
            onPressed: _decrement,
            child: const Icon(Icons.exposure_minus_1),
          ),
        ],
      ),
    );
  }
}