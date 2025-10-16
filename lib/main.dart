import 'package:flutter/material.dart';
import 'config/theme.cfg.dart';
import 'screen/home.screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "yes no",
      theme: ThemeConfig().myThese(),
      home: ChatScreen(),


    );
  }
} 