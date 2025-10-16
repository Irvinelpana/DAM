import 'package:flutter/material.dart';

class Scripts {
  Scripts({required this.context, this.onPress, TextEditingController? controller, FocusNode? focus})
      : textController = controller ?? TextEditingController(),
        focusNode = focus ?? FocusNode();

  //Class Props
  BuildContext context;
  VoidCallback? onPress;

  //Colors
  late final ColorScheme colors = Theme.of(context).colorScheme;

  //Input Border
  late final InputBorder inputBorder = OutlineInputBorder(
    // Borde en tono rojizo
    borderSide: BorderSide(color: Colors.red.shade700, width: 1.5),
    borderRadius: BorderRadius.circular(25),
  );

  //Editing Controller
  final TextEditingController textController;

  //Focus 
  final FocusNode focusNode;

  //Input Decoration (sin suffixIcon fijo — se puede sobreescribir en el widget)
  late final InputDecoration inputDecoration = InputDecoration(
    enabledBorder: inputBorder,
    focusedBorder: inputBorder,
    hintText: "Escribe un mensaje aquí... 💋",
    filled: true,
    // Usar un color del ColorScheme para el fondo del input
    fillColor: colors.surface,
    hintStyle: TextStyle(color: colors.onSurface),
  );
  
  // Getter redundante: ahora devolvemos directamente el inputBorder
  InputBorder? get outlineInputBorder => inputBorder;
}