import {
  rem,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  PaperProps,
  Text,
  useMantineTheme,
  Stack,
  StackProps,
} from "@mantine/core";
import classes from "./contactModal.module.css";
import { useState } from "react";
import { sendEmail } from "./SendEmail";
import { useForm } from "@mantine/form";

export type EmailData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactModal({ ...props }: StackProps) {
  const theme = useMantineTheme();
  const form = useForm({
    mode: "uncontrolled",
    initialValues: { name: "", subject: "", email: "", message: "" },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,

      email: (value) =>
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
          ? null
          : "Invalid email",
      subject: (value) => (value.length < 1 ? "Subject is required" : null),
    },
  });

  const [result, setResult] = useState<string>("");
  const handleSubmit = async (data: EmailData) => {
    setResult("Sending....");
    console.log(data);

    const res = await sendEmail(data);

    if (res.success) {
      form.reset();
    }
    setResult(res.message);
  };

  return (
    <Stack
      maw={theme.breakpoints.md}
      bg="transparent"
      className={classes.wrapper}
      {...props}
    >
      <form
        className={classes.form}
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
      >
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <TextInput
            label="Your name"
            classNames={{
              label: classes.label,
              input: form.errors.name ? classes.error : classes.input,
            }}
            styles={{
              input: { backgroundColor: "transparent" },
            }}
            key={form.key("name")}
            {...form.getInputProps("name")}
            withAsterisk
          />
          <TextInput
            label="Your email"
            key={form.key("email")}
            {...form.getInputProps("email")}
            withAsterisk
            styles={{
              input: { backgroundColor: "transparent" },
            }}
            classNames={{
              label: classes.label,
              input: form.errors.email ? classes.error : classes.input,
            }}
          />
        </SimpleGrid>

        <TextInput
          mt="md"
          label="Subject"
          name="subject"
          withAsterisk
          key={form.key("subject")}
          {...form.getInputProps("subject")}
          styles={{
            input: { backgroundColor: "transparent" },
          }}
          classNames={{
            label: classes.label,
            input: form.errors.subject ? classes.error : classes.input,
          }}
        />

        <Textarea
          mt="md"
          label="Your message"
          autosize
          minRows={4}
          maxRows={6}
          key={form.key("message")}
          styles={{
            input: { backgroundColor: "transparent" },
          }}
          {...form.getInputProps("message")}
          classNames={{ label: classes.label, input: classes.input }}
        />

        <Group justify="space-between" mt={{ base: "sm", sm: "xl" }}>
          <Text fz={"xs"} c="dark.1">
            {result}
          </Text>

          <Button
            type="submit"
            bg="dark.0"
            c="dark.9"
            fw={700}
            w={{ base: "100%", sm: "initial" }}
          >
            Send message
          </Button>
        </Group>
      </form>
    </Stack>
  );
}
