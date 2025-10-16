import 'package:flutter/material.dart';

class MySecondBubbleWidget extends StatelessWidget {
  const MySecondBubbleWidget({super.key});

  @override
  Widget build(BuildContext context) {
    final colors = Theme.of(context).colorScheme;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          decoration: BoxDecoration(
            color: colors.primaryContainer,
            borderRadius: BorderRadius.circular(20)
          ),
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
            child: Text(
              "Hola bebe como has estado?",
              style: TextStyle(color: colors.onSurface),
            ),
          ),
        ),
        SizedBox(height: 10),
      ],
    );
  }
}
