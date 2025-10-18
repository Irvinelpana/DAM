import 'package:flutter/material.dart';

class MyBubbleWidget extends StatelessWidget {
  final String text;

  const MyBubbleWidget({super.key, required this.text});

  @override
  Widget build(BuildContext context) {
    final colors = Theme.of(context).colorScheme;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.end,
      children: [
        Container(
          decoration: BoxDecoration(
            color: colors.primaryContainer,
            borderRadius: BorderRadius.circular(20)
          ),
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
            child: Text(
              text,
              style: TextStyle(color: colors.onSurface),
            ),
          ),
        ),
        SizedBox(height: 5),
      ],
    );
  }
}
