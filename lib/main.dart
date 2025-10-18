import 'package:flutter/material.dart';
import 'config/theme.cfg.dart';
import 'screen/home.screen.dart';
import 'package:provider/provider.dart';
import 'package:flutter_application_2/config/provider.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (_) => ChatProvider(),
      child: MaterialApp(
        debugShowCheckedModeBanner: false,
        title: "yes no",
        theme: ThemeConfig().myThese(),
        home: ChatScreen(),
      ),
    );
  }
} 