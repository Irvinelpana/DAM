import 'package:flutter/material.dart';
import 'package:flutter_application_2/scripts/input_script.dart';


class MessageFieldbox extends StatefulWidget {
  final ValueChanged<String> onValue;

  const MessageFieldbox({super.key, required this.onValue});

  @override
  State<MessageFieldbox> createState() => _MessageFieldboxState();
}

class _MessageFieldboxState extends State<MessageFieldbox> {
  late final TextEditingController _controller;
  late final FocusNode _focusNode;
  bool _hasText = false;

  @override
  void initState() {
    super.initState();
    _controller = Scripts(context: context).textController;
    _focusNode = Scripts(context: context).focusNode;
    _hasText = _controller.text.trim().isNotEmpty;
    _controller.addListener(() {
      final has = _controller.text.trim().isNotEmpty;
      if (has != _hasText) {
        setState(() {
          _hasText = has;
        });
      }
    });
  }

  @override
  void dispose() {
    _controller.removeListener(() {});
    // No dispose del controller ni del focusNode porque son gestionados por Scripts
    super.dispose();
  }

  void _submit() {
    final value = _controller.text.trim();
    if (value.isEmpty) return;
    widget.onValue(value);
    _controller.clear();
    _focusNode.requestFocus();
  }

  @override
  Widget build(BuildContext context) {
    final scripts = Scripts(context: context);
    final borderSide = BorderSide(
      color: _hasText ? Colors.purple.shade800 : Colors.red.shade700,
      width: 1.5,
    );
    final dynamicBorder = OutlineInputBorder(
      borderSide: borderSide,
      borderRadius: BorderRadius.circular(25),
    );

    final inputDecoration = scripts.inputDecoration.copyWith(
      enabledBorder: dynamicBorder,
      focusedBorder: dynamicBorder,
      suffixIcon: IconButton(
        icon: Icon(
          Icons.send_outlined,
          color: _hasText ? Colors.purple.shade800 : Colors.red.shade700,
        ),
        onPressed: _hasText ? _submit : null,
      ),
    );

    return TextFormField(
      onTapOutside: (event) {
        _focusNode.unfocus();
      },
      focusNode: _focusNode,
      controller: _controller,
      decoration: inputDecoration,
      onFieldSubmitted: (value) {
        _submit();
      },
    );
  }
}