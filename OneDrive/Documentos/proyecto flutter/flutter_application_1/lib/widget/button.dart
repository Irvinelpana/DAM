import 'package:flutter/material.dart';

class MyButton extends StatelessWidget {
  final IconData icon;
  final VoidCallback? onPressed;

  const MyButton({
    super.key,
    required this.icon,
    required this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    return FloatingActionButton(
      shape: StadiumBorder(),
      onPressed: onPressed,
      child: Icon(icon),
    );
  }
}